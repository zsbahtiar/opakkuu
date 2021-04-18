import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';


export default function OtherProduct({products=[]}){
  return (
    <>
      <p className='mt-3 text-3xl font-semibold text-gray-700 text-center'>Other Product</p>
      <div className='mt-5 h-20 bg-white flex justify-start rounded-md'>
        {products?.map((item, idx) => (
          <InertiaLink
            href={route('product.detail', item.slug)}
            key={idx}
          >
            <div className='rounded-md relative'>
              <div className='absolute'>
                <h2 className='w-3/5 text-white bg-gray-700 font-semibold text-3xl p-3 uppercase'>{item?.name ?? ''}</h2>
              </div>
              <div className='h-52'>
                <img
                  src={item.photo}
                />
              </div>

            </div>
          </InertiaLink>
        ))??[]}
      </div>
    </>
  )
}
