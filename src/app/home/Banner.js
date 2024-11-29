import { useMediaQuery } from "react-responsive";
import "../../css/Banner.css";

export default function Banner({ mode, onBtnClick }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        mode === "web" ?
            <div className='banner row'>
                <img src="/asset/icon/faceL.svg" alt="" />
                <div className="mainTxtWrap row">

                    <span className="ko">버</span>
                    <button className='interBtn' onClick={onBtnClick}><img src="/asset/icon/btnInter.svg" alt="체험" /></button>
                    <span className="ko">릇</span>


                </div>
                <img src="/asset/icon/faceR.svg" alt="" />
            </div>
            :
            <div className="m_banner column box">
                <img src="/asset/banner/m_banner.webp" />
                <p className="ko">버릇</p>
            </div>
    )
}