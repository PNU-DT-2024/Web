import Menu from "../common/Menu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useRef } from "react";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import ListLink, { setPrev, setNext } from "../common/ListLink";
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
    const prev = setPrev(indivData, data);
    const next = setNext(indivData, data);

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

    useEffect(()=>{
        setIsPlaying(false);
        console.log("isPlaying : ", isPlaying)
        return()=>{
            setIsPlaying(false);
        }
    },[id]);

    return (
        <div>
            <Menu page='PROJECT' />
            <main className={`${isMobile ? 'm_pjContainer' : 'pjContainer'} column`}>
                <MainTheme title={data.mainTitle} desc={data.mainDesc} name={data.name} email={data.email} />
                <section className='poster box'>
                    <div className="wrap">
                        <div className={`article ${isMobile ? 'column' : 'row'}`}>
                            <div className="subject">
                                <h2>
                                    MOTION POSTER
                                </h2>
                            </div>
                            <div className={`exp ${isMobile ? 'column' : 'row'}`}>
                                <div className="column">
                                    <div className="expTxt column">
                                        <p className="titlePj">{data.posterTitle}</p>
                                        <span className="description">{data.posterDesc}</span>
                                    </div>
                                    {isMobile ||
                                        <div className="row btnPoster">
                                            <button onClick={togglePlayPause}>{isPlaying ? '중단' : '포스터 재생'}</button>
                                        </div>}

                                </div>
                                <div className="imgposter">
                                    <div className='motionPoster'>
                                        <video src={`/asset/poster/${data.name}_motion.mp4`} alt="#" ref={videoRef} preload="auto" style={{ display: isPlaying ? 'block' : 'none' }} loop />
                                        <img src={`/asset/poster/${data.name}_poster.webp`} style={{ display: isPlaying ? 'none' : 'block' }} alt="" />
                                    </div>
                                </div>
                                {isMobile &&
                                    <div className="row m_btnPoster">
                                        <button onClick={togglePlayPause}>{isPlaying ? '중단' : '포스터 재생'}</button>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </section>

                <InterTheme name={data.name} title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />

                <div className="box">
                    <ListLink prevName={prev.mainTitle} nextName={next.mainTitle} prevURL={`/project/indiv/${prev.name}`} nextURL={`/project/indiv/${next.name}`} listURL="/project" />
                </div>
            </main>

            <Footer />
        </div >
    )
}
export default IndivPJDetail;