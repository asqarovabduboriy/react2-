import React from 'react'
import './main.css'
import logo from '../../assets/imgs/1200px-Apple_gray_logo 1.png'
import hero from '../../assets/imgs/hero_endframe__cvklg0xk3w6e_large 2.png'
import { FaArrowRightLong } from "react-icons/fa6";

function main() {
    return (
        <>
            <div className='container'>
                <div className='main_section'>
                    <div className='flex-div'>
                        <div>
                            <div className='logo'>
                                <img src={logo} alt="" />
                                <p>iPhone 14 Series</p>
                            </div>
                            <div className='text_title'>
                                <h4>Up to 10% off Voucher</h4>
                            </div>
                            <div className='main_links'>
                                <a href="#">shop now</a>
                                <FaArrowRightLong className='rigth' />
                            </div>
                        </div>
                        <div className='img_wrapper_main'>
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default main;