import React from 'react';
import Helmet from 'react-helmet';
import TopHeader from '@/Shared/TopHeaderHome';
import { usePage } from '@inertiajs/inertia-react';
import OtherProduct from '@/Shared/OtherProduct';

export default function LayoutDetail({ children }) {
  const { product, others } = usePage().props;
  return (
    <div className='w-full max-w-7xl mx-auto'>
      <Helmet titleTemplate="%s | Opakkuu" title={product?.name??''} meta={[{"name": "description", "content": product?.description ?? ''}]} />
      <div className='bg-white mt-6 rounded-md'>
        {children}
      </div>

      <OtherProduct products={others}/>

    </div>

  );
}
