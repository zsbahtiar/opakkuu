import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DeleteButton from '@/Shared/DeleteButton';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import TrashedMessage from '@/Shared/TrashedMessage';
import TextAreaInput from '@/Shared/TextAreaInput';

const Edit = () => {
  const { product, auth } = usePage().props;
  const { data, setData, errors, put, processing } = useForm({
    name: product?.name ?? '',
    price: product?.price ?? '',
    description: product?.description ?? '',
    created_by: product?.created_by ?? 'N/A',
    updated_by: product?.updated_by ?? auth.user.name,
    photo: product?.photo ?? '',
  });


  function handleSubmit(e) {
    e.preventDefault();
    put(route('products.update', product.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this product?')) {
      Inertia.delete(route('products.destroy', product.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this product?')) {
      Inertia.put(route('products.restore', product.id));
    }
  }

  return (
    <div>
      <Helmet title={data.name} />
      <h1 className="mb-8 text-3xl font-bold">
        <InertiaLink
          href={route('products')}
          className="text-indigo-600 hover:text-indigo-700"
        >
          Products
        </InertiaLink>
        <span className="mx-2 font-medium text-indigo-600">/</span>
        {data.name}
      </h1>
      {product.deleted_at && (
        <TrashedMessage onRestore={restore}>
          This product has been deleted.
        </TrashedMessage>
      )}
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
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            {!product.deleted_at && (
              <DeleteButton onDelete={destroy}>
                Delete Product
              </DeleteButton>
            )}
            <LoadingButton
              loading={processing}
              type="submit"
              className="ml-auto btn-indigo"
            >
              Update Product
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Edit.layout = page => <Layout children={page} description="Page Edit Product"/>;

export default Edit;
