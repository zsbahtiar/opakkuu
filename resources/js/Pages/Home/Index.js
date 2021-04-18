import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import LayoutHome from '@/Shared/LayoutHome';

const Index = () => {
  const { products } = usePage().props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {products?.data?.map((item, idx) => (
        <div key={idx} className="md:p-8 p-2 bg-white">
          <img
            className="rounded-lg w-full"
            src={item.photo}
          />
          <p className="text-indigo-500 font-semibold text-base mt-2">{new Intl.NumberFormat(['ban', 'id']).format(item.price)}</p>
          <h1
            className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate"
          >
            {item.name}
          </h1>
          <div className="max-w-full">
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1 whitespace-pre-wrap">
              {item.description.replace(/\\n/g,'\n')}
            </p>
          </div>
        </div>
      ))??[]}

    </div>
  );
};

Index.layout = page => <LayoutHome title="Clothing Center" children={page} description="The most complete online clothing site with a variety of choices. Online shopping is easy and fun at Opakkuu. Fast delivery." />;

export default Index;
