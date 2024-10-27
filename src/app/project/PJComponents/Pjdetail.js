import Menu from "../../common/Menu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import Footer from "../../common/Footer";
import indivData from "../../../components/indiv.json";
import indivData from "../../../components/team.json";
import ListLink, { setPrev, setNext } from "../../common/ListLink";
export default function PjDetail() {
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
    return (
        <div>
            <Menu page='Project' />
            <div className="box">
                <ListLink prevName={prev.mainTitle} nextName={next.mainTitle} prevURL={`/project/indiv/${prev.name}`} nextURL={`/project/indiv/${next.name}`} listURL="/project" />
            </div>
            <Footer />
        </div>
    )
}