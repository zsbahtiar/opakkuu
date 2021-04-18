import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import LayoutDetail from '@/Shared/LayoutDetail';



const Detail = () => {
  const { product, auth } = usePage().props;

  return (
      <div className='bg-white flex justify-start'>
        <div className='product-image max-w-sm h-full rounded overflow-hidden shadow-lg'>
          <img
            className='w-full'
            src={product.photo}
          />
        </div>
        <div className='product-description font-sans ml-3 mt-2'>
          <nav className="text-gray-700 font-light mb-1.5" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <InertiaLink
                  href={route('home')}
                > Home </InertiaLink>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li>
                <InertiaLink href="#" className="text-gray-500" aria-current="page">{product?.name ?? ''}</InertiaLink>
              </li>
            </ol>
          </nav>
          <h1 className=" font-bold text-3xl text-gray-900">{product?.name ?? 'N/A'}</h1>
          <p className="text-indigo-500 font-semibold text-xl">{new Intl.NumberFormat(['ban', 'id']).format(product?.price?? '')}</p>
          <button
            className="bg-green-500 text-gray-100 font-sans font-semibold py-2 px-5 rounded-md border-green-800 my-3"
            onClick={() => {
              window.open(`https://api.whatsapp.com/send?phone=+62${auth?.user?.phone?? ''}&text=Hi Opakkuu! I want to buy ${product?.name ?? ''} `);
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
