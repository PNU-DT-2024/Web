
import { useState } from 'react';
import "../../css/Banner.css";

export default function Banner({ onBtnClick }) {
    const images = [
        { url: '/asset/icon/mainIMG.svg' },
        { url: '/asset/image2.jpg' },
        { url: '/asset/image3.jpg' },
        { url: '/asset/image4.jpg' }
    ];
    const [locX, setX] = useState({ x: 0 })
    let mouseHandle = (e) => {
        const mouseX = e.clientX
        setX({ x: mouseX });
    }
    return (
        <div className='interBanner'>
            <div className='imgMain'>
                <span role='button' ></span>
                <img src='/asset/icon/mainIMG.svg' />
                <span role='button'></span>
            </div>
            <div className="mask" onMouseMove={mouseHandle}>
                <img src="/asset/icon/mask.svg" alt="cursor" className="imgMask" style={{ position: 'absolute', transform: `translateX(calc(${locX.x}px - 50%))`, transition: 'all 0.5s ease-out' }} />
            </div >
            <button className='interBtnOff' onClick={onBtnClick}><img src="/asset/icon/btnInter.png" alt="" /></button>
        </div>


    )
}