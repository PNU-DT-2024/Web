import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { changeName } from "../../components/store";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import ListLink, { setPrev, setNext } from "../common/ListLink";
import styles from "../../css/IndivPFDtail.module.css";
import { useEffect } from "react";

function IndivPFDetail() {
    let dispatch = useDispatch();
    let { id } = useParams();
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const data = indivData.list.find(item => item.name === id);
    const prev = setPrev(indivData, data);
    const next = setNext(indivData, data);
    useEffect(() => {
        console.log(`/asset/profile/${data.name}_profile.webp`)
    })
    return (
        <div>
            <Menu page='profile' />
            <main className={styles.pfContainer}>
                <section className={`box ${isMobile ? styles.m_profile : styles.profile} ${isMobile ? 'column ' : 'row'}`}>
                    <div className={styles.left}>
                        <div>
                            <img src={`/asset/profile/${data.name}_profile.webp`} alt={data.name} />
                            <div className={styles.imgSign}>
                                <img className={styles.signiture} src="#" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.right} column`}>
                        <div className={styles.top}>
                            <div className={`${styles.name} row`}>
                                <div className='column'>
                                    <Link to={'/profile/team'} onClick={() => dispatch(changeName(data.team))}>
                                        <span>{data.team}</span>
                                    </Link>
                                    <div className='row'>
                                        <span>{data.name}</span>
                                        <span>{data.engName}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.sns} ${isMobile ? 'column' : 'row'}`}>
                                <div className={isMobile && 'row'}>
                                    <span>SNS</span>
                                    <Link to={`https://www.instagram.com/${data.insta.slice(1)}`} target='_blank'>
                                        <span>{data.insta}</span>
                                    </Link>
                                </div>
                                <div className={isMobile && 'row'}>
                                    <span>e-mail</span>
                                    <span>{data.email}</span>
                                </div>
                            </div>
                            <div className={`description ${styles.free} `}>{data.freeWrite}</div>
                        </div>
                        <div className={`${styles.bottom} ${isMobile ? 'column' : 'row'}`}>
                            <Link to={`/project/indiv/${data.name}`}>
                                <div className={styles.indivPjImg}>
                                    <img src={`/asset/poster/cover/${data.name}_cover.webp`} alt='' />
                                </div>
                                <div>
                                    <p>INDIVIDUAL PROJECT</p>
                                    <p>{data.mainTitle}</p>
                                </div>
                            </Link>

                            <Link to={`/project/team/${data.team}`} className={styles.link}>
                                <div className={styles.teamPjImg}>
                                    <img src="#" alt='' />
                                </div>
                                <div>
                                    <p>TEAM PROJECT</p>
                                    <p>{data.teamTitle}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className={`box ${styles.content}`}>
                    <ListLink prevName={prev.name} nextName={next.name} prevURL={`/profile/indiv/${prev.name}`} nextURL={`/profile/indiv/${next.name}`} listURL="/profile" />
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default IndivPFDetail;