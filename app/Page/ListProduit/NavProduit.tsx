"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import i1 from '../../../public/image/i1.jpg'
import DropDownMenu from '../../components/DropDown/DropDownMenu';
import { Button } from '@nextui-org/react';
import Modal from '@/app/Page/Modal/Modal';



const NavProduit = () => {
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
                                    alt="Picture of the author" />
                            </div>


                            <Button type="button" className="btn btn-dark" style={{ top: "100px" }} >A Emporter </Button>
                            <p >Flex item 2</p>
                            <div ><DropDownMenu /></div>

                        </div>
                    </div>


                </nav>
            </div>
        </div>

    )
}

export default NavProduit