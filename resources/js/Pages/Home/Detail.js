import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import LayoutDetail from '@/Shared/LayoutDetail';


const Detail = () => {
  const { product, others, auth } = usePage().props;
  console.log(product, others);

  return (
    <div className='bg-white flex justify-start'>
      <div className='product-image max-w-sm h-full rounded overflow-hidden shadow-lg'>
        <img
          className='w-full'
          src={product.photo}
        />
      </div>
      <div className='product-description font-sans ml-3 mt-2'>
        <h1 className=" font-bold text-3xl text-gray-900">{product?.name ?? 'N/A'}</h1>
        <p className="text-indigo-500 font-semibold text-xl">{new Intl.NumberFormat(['ban', 'id']).format(product?.price?? '')}</p>
        <button
          className="bg-green-500 text-gray-100 font-sans font-semibold py-2 px-5 rounded-md border-green-800"
          onClick={() => {
            window.open('google.com');
          }}
        >
          Buy Now
        </button>
        <p className='font-normal text-gray-900 text-base whitespace-pre-wrap'>{product?.description.replace(/\\n/g,'\n') ?? ''}</p>
      </div>
    </div>
  );
};

Detail.layout = page => <LayoutDetail children={page}/>;

export default Detail;
