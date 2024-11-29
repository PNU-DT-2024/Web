import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import TeamData from "../../components/team.json";
import ListLink, { setPrev, setNext } from "../common/ListLink";
import MainTheme from "./PJComponents/MainTheme";
import InterTheme from "./PJComponents/InterTeme";
import "../../css/PJDetail.css";
function TeamPJDetail() {
    let { id } = useParams();
    const data = TeamData.list.find(item => item.name === id);
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const prev = setPrev(TeamData, data);
    const next = setNext(TeamData, data);

    return (
        <div>
            <Menu page='PROJECT' />
            <main className={`${isMobile ? 'm_pjContainer' : 'pjContainer'} column`}>
                <MainTheme title={data.mainTitle} desc={data.mainDesc} name={data.name} member={data.member} />
                <section className='poster box'>
                    <div className={`article ${isMobile ? 'column' : 'row'}`}>
                        <div className="subject">
                            <h2>
                                TEAM FILM
                            </h2>
                        </div>
                        <div className={`exp column`}>
                            <div className="column">
                                <div className="expTxt column">
                                    <p className="titlePj">{data.videoTitle}</p>
                                    <span className="description">{data.videoDesc}</span>
                                </div>

                            </div>
                            <div className="film">
                                <div className='motionPoster'>
                                    <img src={`/asset/poster/${data.name}_poster.webp`} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <InterTheme name={data.name} title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />

                <div className="box">
                    <ListLink prevName={prev.mainTitle} nextName={next.mainTitle} prevURL={`/project/team/${prev.name}`} nextURL={`/project/team/${next.name}`} listURL="/project" />
                </div>
            </main>
            <Footer />
        </div >
    )
}
export default TeamPJDetail;