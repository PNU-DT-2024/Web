
import { useState, useRef } from 'react';

export default function Banner({ onBtnClick }) {
    const images = [
        { url: '/asset/banner/1.webp' },
        { url: '/asset/banner/2.webp' },
        { url: '/asset/banner/3.webp' },
        { url: '/asset/banner/4.webp' }
    ];
    const [locX, setX] = useState({ x: 0 });
    const [isClick, setClick] = useState(0);
    const interactionRef = useRef(null);

    let mouseHandle = (e) => {
        if (interactionRef.current) {
            const rect = interactionRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;  // interaction 영역 내 상대 좌표
            const constrainedX = Math.max(0, Math.min(mouseX, rect.width));  // 0에서 rect.width로 제한
            setX({ x: constrainedX });
        }
    }
    function imgTransition(move) {
        if (move === 'prev') {
            isClick === 0 ? setClick(images.length - 1) : setClick(isClick - 1);
        }
        if (move === 'next') {
            isClick === images.length - 1 ? setClick(0) : setClick(isClick + 1);
        }
        console.log(isClick)
    }
    return (
        <div className='interBanner column'>
            <div className='row'>
                <div className='btnPrev' role='button' onClick={() => imgTransition('prev')}><img src="/asset/icon/arrowL.svg" alt='이전' /></div>
                <div className='interaction' ref={interactionRef}>
                    <div className='imgMain'>
                        <img src={images[isClick].url} alt='' />
                    </div>
                    <div className="mask" onMouseMove={mouseHandle}>
                        <img src="/asset/banner/trigger.svg" alt="cursor" className="imgMask" style={{ transform: `translateX(calc(${locX.x}px - 50%))`, transition: 'all 0.5s ease-out' }} />
                    </div >
                </div>
                <div className='btnPrev' role='button' onClick={() => imgTransition('next')}><img src="/asset/icon/arrowR.svg" alt='다음' /></div>
            </div>
            <div className='notice column'>
                {/* <p>마우스를 좌우로 천천히 움직여주세요</p> */}
                <button className='interBtnOff' onClick={onBtnClick}><img src="/asset/icon/btnInterOff.svg" alt="" /></button>
            </div>
        </div>


    )
}