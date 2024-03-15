"use client"
import React, { Children } from 'react'
import Image from 'next/image'
import i1 from '../../public/image/i1.jpg' 
import DropDownMenu from './DropDown/DropDownMenu';
import Cart from './Cart/Cart';
import ShoppingCartProvider from './Cart/ShoppingCartContext';



const Header1 = () => {
  return (
    // <ShoppingCartProvider>
    <div className='header'>
        
      <div> 
        <nav className="me-auto" >
         <div className="container-fluid">
         <div className='container'>
       
       <div className='logo'> 
       <Image 
        src={i1}
        width={80}
       height={80}
       className="hidden md:block"
       alt="Picture of the author"/> </div> 
       </div>
          </div>
        
  
        </nav> 
        <Cart />
        {/* <DropDownMenu /> */}
    </div>
         
    </div>
    // </ShoppingCartProvider>
  );
};

export default Header1