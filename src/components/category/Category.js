import React from 'react'
import './category.css';
// import { IoIosPhonePortrait } from "react-icons/io";
import phone from '../../assets/imgs/phone.svg';
import compature from '../../assets/imgs/laptop.svg';
import smartwatch from '../../assets/imgs/smartwatch.svg';
import Camera from '../../assets/imgs/camera.svg';
import hedaphone from '../../assets/imgs/headphones.svg';
import Gaming from '../../assets/imgs/controller.svg';


function category() {
    const data = [
        {
            id: 1,
            title: "Phones",
            img: phone
        },
        {
            id: 2,
            title: "Computers",
            img: compature
        },
        {
            id: 3,
            title: "SmartWatch",
            img: smartwatch
        },
        {
            id: 4,
            title: "Camera",
            img: Camera
        },
        {
            id: 5,
            title: "HeadPhones",
            img: hedaphone
        },
        {
            id: 6,
            title: "Gaming",
            img: Gaming
        }

    ]
    let cards = data?.map((el) => <div key={el.id} className="card_category">
        <div className='card_title'>
          <img src={el.img} alt="" className='phones'/>
            <p>{el.title}</p>
        </div>
    </div>
    )
    return (
        <>
            <div className='container'>
                <div className='category_wrapper_element'>
                    <div className='category_div'></div>
                    <p className='category_title'>Categories</p>
                </div>
                <h1 className='title_h1'>Browse By Category</h1>
                <div className='category_cards_wrapper'>
                       {cards}
                </div>
                <div className='linea'></div>
            </div>
        </>
    )
}

export default category;

