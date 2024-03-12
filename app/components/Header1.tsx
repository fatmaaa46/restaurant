"use client"
import React from 'react'
import Image from 'next/image'
import i1 from '../../public/image/i1.jpg' 
import DropDownMenu from './DropDown/DropDownMenu';



const Header1 = () => {
  return (
    <div className='header'>
        
      <div> 
        <nav >
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
         <DropDownMenu />
    </nav> 
    </div>
         
    </div>
    
  )
}

export default Header1