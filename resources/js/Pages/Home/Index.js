import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import LayoutHome from '@/Shared/LayoutHome';

const Index = () => {
  const { products } = usePage().props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
      {products?.data?.map((item, idx) => (
        <InertiaLink
          key={idx}
          href={route('product.detail', item?.slug ?? item.id)}
          >
          <div className="h-full rounded-md bg-white cursor-pointer">
            <img
              className="w-full"
              src={item.photo}
            />
            <div className="max-w-full p-3">
            <p className="text-indigo-500 font-semibold text-base mt-2">{new Intl.NumberFormat(['ban', 'id']).format(item.price)}</p>
            <h1
              className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
            >
              {item.name}
            </h1>

              <p className="text-base font-medium tracking-wide text-gray-600 mt-1 whitespace-pre-wrap truncate">
                {item.description.replace(/\\n/g,'\n').substring(0,50)}
              </p>
            </div>
          </div>
        </InertiaLink>
      ))??[]}

    </div>
  );
};

Index.layout = page => <LayoutHome title="Clothing Center" children={page} description="The most complete online clothing site with a variety of choices. Online shopping is easy and fun at Opakkuu. Fast delivery." />;

export default Index;
