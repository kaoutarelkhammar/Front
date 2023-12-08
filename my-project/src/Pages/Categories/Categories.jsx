import React from 'react';
import NavBar from '../Home/NavBar';
import Categorie from './Categorie';
import Footer from '../Home/Footer';



const Categories = () => {

  

  return (
    <>
    <NavBar/>

    <section className='p-8 bg-backgroundColor' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Ceramics and pottery'
          image='https://images.pexels.com/photos/4207890/pexels-photo-4207890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
        <Categorie
          name='Crochets'
          image='https://i.pinimg.com/564x/b7/a7/4a/b7a74af5afdd2b7ef4b08429d6cd5df7.jpg'
        />
        <Categorie
          name='Embrodery and Needlcraft'
          image='https://i.pinimg.com/564x/c8/00/c7/c800c73f41923715cd9343c2e246febc.jpg'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Home fragence and candles'
          image='https://i.pinimg.com/564x/fe/88/12/fe8812c845fb22a47594279d32a4d350.jpg'
        />
        <Categorie
          name='Jute and natural fiber decor'
          image='https://i.pinimg.com/564x/f3/f6/d5/f3f6d5207eae739300dc310d39885501.jpg'
        />
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Categories;
