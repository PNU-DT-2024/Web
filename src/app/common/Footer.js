import { Link } from "react-router-dom";
import imgPnu from "../../components/img/pnuLogo.png"
import imgInsta from "../../components/img/instaLogo.png"
import imgyouTube from "../../components/img/youtubeLogo.png"
import styles from "../../css/Footer.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="contentsContainer">
                <div className={styles.footerContainer}>
                    <div className={`${styles.topContainer} row`}>
                        <div className={`${styles.exhibitionContainer} description`}>
                            <p>부산대학교 디자인학과 디자인앤테크놀로지 전공 15회 졸업전시 &lt;버릇&gt;</p>
                            <p>Dept. of Design, Design and Technology 15th Graduation Show</p>
                        </div>
                        <div className='row'>
                            <div className={styles.imgLink}>
                                <Link to="https://www.instagram.com/pnu.dt.14/"><img src={imgInsta} alt="인스타그램" /></Link>
                            </div>
                            <div className={styles.imgLink}>
                                <Link to="https://www.youtube.com/@pnudt"><img src={imgyouTube} alt="유튜브" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bottomContainer} row`}>
                        <div className={`${styles.graduationContainer} description`}>
                            <p>본 사이트는 2024 졸업논문을 대체합니다.</p>
                            <p>ⓒ 2024 Pusan National University Design&Technology all rights reserved.</p>
                        </div>
                        <div>
                            <Link to="https://www.pusan.ac.kr/kor/Main.do"><img src={imgPnu} alt="부산대학교" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;