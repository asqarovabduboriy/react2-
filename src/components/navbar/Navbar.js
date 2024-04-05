import React from 'react'
import './navbar.css';
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    const LINKS = ["Home", "Contact", "About", "Sign in"];
    let item = LINKS.map((el, valeu) => {
        return <li key={valeu}>
            <a href="#">{el}</a>
        </li>
    })
    return (
        <>
            <header>
                <div className='container'>
                    <div className='header_wrapper'>
                        <div className='logo'>
                            <h1>Exclusive</h1>
                        </div>
                        <nav>
                            <ul className='ul_item'>
                                {item}
                            </ul>
                        </nav>
                        <form>
                            <input type="text" placeholder='What are you looking for?' />
                            <CiSearch className='search' />
                        </form>
                        <div className='icon_container'>
                            <FaRegHeart className='icon' />
                            <IoCartOutline className='icon' />
                        </div>
                    </div>
                </div>
                <div className='line'></div>
            </header>
        </>
    )
}

export default Navbar;