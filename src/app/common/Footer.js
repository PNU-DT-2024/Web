import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "../../css/Footer.module.css";
function Footer() {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerWrap} ${isMobile ? 'column' : 'row'}`}>
                <div className={`${isMobile ? styles.m_grad : styles.grad} column`}>
                    <div className={`${styles.exhibition} description`}>
                        <p>부산대학교 디자인학과 Design & Technology 전공 15회 졸업전시 &lt;버릇&gt;</p>
                        <p>Dept. of Design, Design & Technology 15th Graduation Show</p>
                    </div>
                    <div className={`${styles.copyright}`}>
                        <p>본 사이트는 2024 졸업논문을 대체합니다.</p>
                        <p>ⓒ 2024 Pusan National University Design&Technology all rights reserved.</p>
                    </div>
                </div>
                <div className={isMobile ? `row ${styles.m_site}` : `column ${styles.site}`}>

                    <div className={`${styles.linkSite} row`}>
                        <div className={styles.imgLink}>
                            <Link to="https://www.instagram.com/pnu.dt.15/" target='_blank'><img src="/asset/instaLogo.svg" alt="인스타그램" /></Link>
                        </div>
                        <div className={styles.imgLink}>
                            <Link to="https://www.youtube.com/@pnudt" target='_blank'><img src="/asset/youtubeLogo.svg" alt="유튜브" /></Link>
                        </div>
                    </div>
                    <div className={styles.linkSite}>
                        <Link to="https://www.pusan.ac.kr/kor/Main.do" target='_blank'><img src="/asset/icon/pnuLogo.svg" className={styles.pnuLogo} alt="부산대학교" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;