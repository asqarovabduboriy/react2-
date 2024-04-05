import React from 'react'
import './card.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import kuchu from '../../assets/imgs/kuchu.png'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import starts from '../../assets/imgs/Five star.png'
import camera from '../../assets/imgs/camera.png';
import copmpyuter from '../../assets/imgs/comp.png';
import shanpun from '../../assets/imgs/unsplash 1.png';
import car from '../../assets/imgs/redcar.png';
import butsa from '../../assets/imgs/budsa.png';
import play from "../../assets/imgs/playstation.png";
import kurtka from "../../assets/imgs/kurtka.png"




function Card() {
    const data = [
        {
            id: 1,
            img: kuchu,
            price: 100,
            rating: 3.9,
            title: 'Breed Dry Dog Food'
        },
        {
            id: 2,
            img: camera,
            price: 360,
            rating: 3.9,
            title: 'CANON EOS DSLR Camera'
        },
        {
            id: 3,
            img: copmpyuter,
            price: 700,
            rating: 3.9,
            title: 'ASUS FHD Gaming Laptop'
        },
        {
            id: 4,
            img: shanpun,
            price: 500,
            rating: 3.9,
            title: 'Curology Product Set '
        },
        {
            id: 5,
            img: car,
            price: 200,
            rating: 3.9,
            title: 'Kids Electric Car'
        },
        {
            id: 6,
            img: butsa,
            price: 1100,
            rating: 5,
            title: 'Jr. Zoom Soccer Cleats'
        },
        {
            id: 7,
            img: play,
            price: 1500,
            rating: 4.0,
            title: 'GP11 Shooter USB Gamepad '
        },
        {
            id: 8,
            img: kurtka,
            price: 400,
            rating: 3.7,
            title: 'Quilted Satin Jacket'
        }
    ]
    let bigcard = data?.map((el) =>
        <div key={el.id}>
            <div className='card_two'>
                <div className='icon_container_card'>
                    <button>  <CiHeart className='icon_two' /></button>
                    <button>  <FaEye className='icon_two' /></button>
                </div>
                <div className='imgs_card'>
                    <img src={el.img} alt="" />
                </div>
            </div>
            <div className='text_content'>
                <div className='card_btn'>
                    <button>Add cart</button>
                </div>
                <p>{el.title}</p>
                <div className='star_content'>
                    <p>{el.price}$</p>
                    <img src={starts} alt="" />
                    <span>rating:{el.rating}</span>
                </div>
            </div>
        </div>)
    return (
        <>
            <div className="container">
                <div className='category_wrapper_element'>
                    <div className='category_div'></div>
                    <p className='category_title'>Our Products</p>
                </div>
                <div className='title_cards'>
                    <h1 className='title_h1'>Explore Our Products</h1>
                    <div>
                        <button> <FaArrowLeftLong /></button>
                        <button> <FaArrowRightLong />  </button>
                    </div>
                </div>
                <div className='cards_wrapper_two'>
                    {bigcard}
                </div>
                <div className='btn_wrapper'> 
                     <button>View All Products</button>
                </div>
            </div>
        </>
    )
}

export default Card;