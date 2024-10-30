import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import indivData from "../../components/indiv.json";
import styles from "../../css/indivList.module.css";
export default function IndivSelect({ type }) {
    const isTablet = useMediaQuery({
        query: "(max-width: 1080px) and (min-width: 768px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width : 767px)"
    });
    const [isHovered, setIsHovered] = useState(false);
    const [isName, setname] = useState(null);
    const handleMouseEnter = (name) => {
        setIsHovered(true);
        setname(name);
        // console.log('들어감', isHovered, name);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setname(null);
        // console.log('나감', isHovered);
    };
    return (
        <section className={`row ${styles.selectWrap}`}>
            <article className={`${styles.contentList} column`}>
                {indivData.list.map((item, index) => (
                    <Link key={item.index} to={`indiv/${item.name}`} className={styles.selectIndiv}>
                        <div className={`${index === indivData.list.length - 1 ? styles.lastList : ''} row`}
                            onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                            <p>{type === 'project' ? item.mainTitle : item.name}</p>
                            <p>{type === 'project' ? item.name : item.engName}</p>
                        </div>
                    </Link>
                ))}
            </article>
            {(isTablet || isMobile) ||
                <article className={`${styles.contentThumb} ${isHovered ? styles.hovered : ''}`}>
                    {isName != null ? (
                        type === 'project' ? (
                            <div className={styles.imgThumb}>
                                <img src={`/asset/poster/cover/${isName}_cover.webp`} alt={isName} loading="lazy" />
                            </div>
                        ) : (
                            <div className={styles.imgAction}>
                                <img src='/asset/profile/trigger.png'
                                    alt="" loading="lazy" className={`${styles.imgTrigger} ${isHovered&&styles.show}`}/>
                                <img src={isHovered ? `/asset/profile/SC/${isName}_profileSC.webp` : ""} loading="lazy" alt={isName} className={styles.imgHover} />
                            </div>
                        )
                    ) : (type === 'project' ? (
                        <div className={styles.imgThumb}>
                            <img src={`/asset/poster/cover/defalut_cover.webp`} alt={isName} loading="lazy" />
                        </div>
                    ) : (
                        <div className={styles.imgThumb}>
                            <img src="/asset/profile/SC/profileBase.webp" className={styles.imgBase} alt={isName} loading="lazy" />
                        </div>
                    )
                    )}
                </article>
            }
        </section>
    )
}












