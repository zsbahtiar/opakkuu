import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { usePrevious } from 'react-use';
import pickBy from 'lodash/pickBy';
import { Inertia } from '@inertiajs/inertia';

export default () => {
  const { filters } = usePage().props;
  const [opened, setOpened] = React.useState(false);

  const [values, setValues] = React.useState({
    search: filters.search || '',
  });

  const prevValues = usePrevious(values);

  React.useEffect(() => {
    // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length
        ? pickBy(values)
        : { remember: 'forget' };
      setTimeout(()=>{
        Inertia.get(route(route().current()), query, {
          replace: true,
          preserveState: true
        });
      },1000)

    }
  }, [values]);

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
            <input type="search" name="search" id="search"  placeholder="search for clothes"  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" onChange={e => {
              const key = e.target.name;
              const value = e.target.value;

              setValues(values => ({
                ...values,
                [key]: value
              }));

              if (opened) setOpened(false);
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};
