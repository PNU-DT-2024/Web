import Menu from "../common/Menu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import ListLink, {setPrev, setNext} from "../common/ListLink";
import MainTheme from "./PJComponents/MainTheme";
import InterTheme from "./PJComponents/InterTeme";

import "../../css/PJDetail.css";

function IndivPJDetail() {
    let { id } = useParams();
    const data = indivData.list.find(item => item.name === id);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const prev =setPrev(indivData, data);
    const next =setNext(indivData, data);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <div>
            <Menu page='PROJECT' />
            <main className={`${isMobile?'m_pjContainer':'pjContainer'} column`}>
                <MainTheme title={data.mainTitle} desc={data.mainDesc} name={data.name} email={data.email} />
                <section className='box'>
                    <div className={isMobile ? 'm_subject column' : 'subject row'}>
                        <h2>MOTION POSTER</h2>
                        <div>
                            <p className='titlePJ'>{data.posterTitle}</p>
                            <p className='description'>{data.posterDesc}</p>
                            <div className="row btnPoster">
                                <p>{isPlaying ? '중단' : '포스터 재생'}</p><button onClick={togglePlayPause}><img src={isPlaying ? '/asset/icon/stop.svg' : '/asset/icon/play.svg'} alt=""/></button>

                            </div>
                        </div>
                    </div>
                    <div className={isMobile ? 'm_motionPoster' : 'motionPoster'}>
                        <video src="/asset/poster/박정혜_poster.mp4" alt="#" ref={videoRef} preload="auto" style={{ display: isPlaying ? 'block' : 'none' }} loop/>
                        <img src={`/asset/poster/${data.name}_poster.webp`} style={{ display: isPlaying ? 'none' : 'block' }} alt=""/>
                    </div>
                </section>

                <InterTheme title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />

                <div className="box">
                    <ListLink prevName={prev.mainTitle} nextName={next.mainTitle} prevURL={`/project/indiv/${prev.name}`} nextURL={`/project/indiv/${next.name}`} listURL="/project" />
                </div>
            </main>

            <Footer />
        </div >
    )
}
export default IndivPJDetail;