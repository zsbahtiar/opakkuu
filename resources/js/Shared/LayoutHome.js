import React from 'react';
import Helmet from 'react-helmet';
import TopHeader from '@/Shared/TopHeaderHome';

export default function LayoutHome({ title, description ="Opakkuu Shop", children }) {
  return (
    <div>
      <Helmet titleTemplate="%s | Opakkuu" title={title} meta={[{"name": "description", "content": description}]} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
