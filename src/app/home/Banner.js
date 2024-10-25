import { useMediaQuery } from "react-responsive";
import "../../css/Banner.css";

export default function Banner({ onBtnClick }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={`${isMobile ? 'm_banner' : 'banner'} row`}>
            <img src="/asset/icon/faceL.svg" />
            <div className="mainTxtWrap row">

                <span className="ko">버</span>
                <button className='interBtn' onClick={onBtnClick}><img src="/asset/icon/btnInter.png" /></button>
                <span className="ko">릇</span>


            </div>
            <img src="/asset/icon/faceR.svg" />
        </div>
    )
}