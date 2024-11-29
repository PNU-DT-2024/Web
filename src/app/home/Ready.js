import { useMediaQuery } from "react-responsive";

import styles from "../../css/Ready.module.css"
export default function ({isDday}) {
    const isMobile = useMediaQuery({
        query: "(max-width : 767px)"
    });

    return (
        <main className={isMobile ? `column ${styles.m_ready}` : `row ${styles.ready}`}>
           
            <section className={`${styles.left} column`}>
                <div>
                    <img src="/asset/icon/asura.png" alt="" />
                </div>
                <p className="ko">버릇</p>
            </section>
            <section className={`${styles.right} column`}>
                {isMobile && <div className={`${styles.dday} ko`}>
                    <p className={styles.day}>{isDday.days === 0 ? 'D-Day!' : `D-${isDday.days}`}</p>
                    {isDday.days === 0&&<p className={styles.time}>{isDday.hours} : {isDday.minutes} : {isDday.seconds}</p>}
                    
                </div>}
                <div className={`${styles.top} column`}>
                    <p>
                        15회 졸업 전시회
                    </p>
                    <p>
                        부산대학교 디자인학과 Design & Technology 전공
                    </p>
                </div>
                {isMobile || <div className={`${styles.dday} ko`}>
                {isDday.days === 0&&<p className={styles.time}>{isDday.hours} : {isDday.minutes} : {isDday.seconds}</p>}
                    <p className={styles.day}>{isDday.days === 0 ? 'D-Day!' : `D-${isDday.days}`}</p>
                </div>}
                <div className={`${styles.bottom} column`}>
                    <div className="row">
                        <div>Exhibition</div>
                        <div className={styles.info}>
                            <p>2024. 11. 02 ~ 11. 04</p>
                            <p>10am ~ 6pm</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>Opening</div>
                        <div className={styles.info}>
                            <p>11.01</p>
                            <p>6pm</p>
                        </div>
                    </div>
                    <div className="row">
                        <div>Offline Location</div>
                        <div className={styles.info}>
                            <p>부산 디자인 진흥원 1층 전시장 </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}