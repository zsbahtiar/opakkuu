import React from 'react';
import Helmet from 'react-helmet';
import TopHeader from '@/Shared/TopHeaderHome';
import { usePage } from '@inertiajs/inertia-react';

export default function LayoutDetail({ children }) {
  const { product  } = usePage().props;
  return (
    <div className='bg-white w-full max-w-7xl mx-auto mt-6 rounded-b-sm'>
      <Helmet titleTemplate="%s | Opakkuu" title={product?.name??''} meta={[{"name": "description", "content": product?.description ?? ''}]} />

        {children}

    </div>
  );
}
