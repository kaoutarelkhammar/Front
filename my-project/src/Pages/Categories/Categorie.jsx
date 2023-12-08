import React from 'react';

import { Link } from 'react-router-dom';

const Categorie = ({ name, image }) => {
  return (
    <Link to={`/categories/${name.toLowerCase()}`}>
      <figure className='relative'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover max-h-[38rem]'
        />
        <figcaption className=' bg-black/30 absolute z-100 top-0 left-0 w-full h-full flex flex-col justify-center items-center p-2'>
          <h2 className='mb-4 p-2 uppercase text-xl sm:text-2xl md:text-3xl text-white font-bold text-center font-primary'>
            {name}
          </h2>
          <button className=' btn btn-outline  text-yellow-900 font-primary bg-white  hover:bg-customColor hover:text-yellow-900'>
            Shop Now
          </button>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Categorie;
