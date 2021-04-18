import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import TextAreaInput from '@/Shared/TextAreaInput';

const Create = () => {
  const { auth } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    name: '',
    description: '',
    price: '',
    created_by: auth?.user?.name ?? 'N/A',
    photo: '',
    slug: '',
  });

  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?client_id=40y9HwQVsRa1ijbhnJWBdDyy7STUGrl97c01sHyW14A&query=clothes`)
      .then((res) => res.json())
      .then((data) => {
        setData('photo', data?.results[Math.floor(new Date().getSeconds()/9)]?.urls?.regular ?? 'https://images.tokopedia.net/img/cache/900/product-1/2021/3/16/2668215/2668215_4d83f050-b0cf-44e2-bae5-1a906e392a24.jpeg')
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    post(route('products.store'));
  }

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        <InertiaLink
          href={route('products')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Products
        </InertiaLink>
        <span className="font-medium text-indigo-600"> /</span> Create
      </h1>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap p-8 -mb-8 -mr-6">
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Name"
              name="name"
              errors={errors.name}
              value={data.name}
              onChange={e => setData('name', e.target.value)}
              onBlur={e => setData('slug', e.target.value.split(' ').join('-'))}
              placeholder="Enter name of product here..."
              required
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Price"
              name="price"
              type="number"
              min="0"
              errors={errors.price}
              value={data.price}
              onChange={e => setData('price', e.target.value)}
              placeholder="Enter price of product here..."
              step="0.01"
              pattern="^\d+(?:\.\d{1,2})?$"
            />
            <TextAreaInput
              className="w-full pb-8 pr-6"
              label="Description"
              name="description"
              errors={errors.description}
              value={data.description}
              onChange={e => setData('description', e.target.value)}
              placeholder="Enter description of product here... "
            />
          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-indigo"
            >
              Create Product
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.layout = page => <Layout title="Create Product" children={page} description="Page Create Product" />;

export default Create;
