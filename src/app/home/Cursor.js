import { useState, useEffect } from 'react';

export default function Cursor() {
    const [xy, setXY] = useState({ x: 0, y: 0 })

    const xyHandler = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setXY({ x: mouseX, y: mouseY });

    }

    return (
        <div
            style={{
                position: 'absolute',
                transform : `translate(${xy.x}px, ${xy.y}px)`,
                transition: '0.1s ease-out',
                pointerEvents: 'none',
            }}
            onMouseMove={xyHandler}
        >
            <img src="/asset/icon/mask.svg" alt="cursor" style={{ width: '100%' }} />
        </div >
    );
}
