import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto mb-4'>
      <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
        <h1 className=" font-bold text-3xl text-gray-900">Opakkuu Clothing Center</h1>
        <p className=" font-base text-base text-gray-600">The most complete online clothing site with a variety of choices. Online shopping is easy and fun at Opakkuu. Fast delivery.</p>
      </div>
      <div className="box pt-6">
        <div className="box-wrapper">

          <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
            <button  className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            <input type="search" name="" id=""  placeholder="search for clothes"  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"/>
          </div>
        </div>
      </div>
    </div>
  );
};
