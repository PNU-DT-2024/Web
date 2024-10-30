import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";


import Ready from "./Ready";
import Menu from "../common/Menu";
import Banner from "./Banner";
import InterBanner from "./InterBanner";
import KakaoMap from "../../kakaoMap";
import Footer from "../common/Footer";
import styles from "../../css/Main.module.css"

export default function Main() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1080px) and (min-width: 768px)"
});
  const [inter, setInter] = useState(true);
  function startInter() {
    setInter(!inter);
  }
  const bottomMotion = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { ease: "easeInOut", duration: 0.8 },
  };
  const titMotion = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false },
    transition: { ease: "easeInOut", duration: 0.3 },
  };

  // ----------------------------------------------
  const opening = '2024-11-01T16:00:00';
  const openingDate = new Date(opening);
  const [isClick, setClick] = useState(true);
  // const [isDate, setDate] = useState(new Date());
  const [isOpen, setOpen] = useState(false);
  const calculateTimeDifference = () => {
    const currentTime = new Date();
    const timeDifference = openingDate - currentTime;

    const days = 32 - currentTime.getDate();
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, timeDifference };
  };
  const [isDday, setDday] = useState(calculateTimeDifference());
  useEffect(() => {
    const calculateIsOpen = () => {
      const currentTime = new Date();
      const openTime = new Date(opening);
      if (!isOpen) {
        setOpen(currentTime >= openTime);
      }
      // setDate(currentTime);
      setDday(calculateTimeDifference());
      // console.log(`버튼 클릭 : ${!isClick}, 디데이 : ${isOpen}`);
    };
    const interval = setInterval(calculateIsOpen, 500);
    if (isClick === false) {
      calculateIsOpen();
    }
    return () => clearInterval(interval);
  }, [isOpen]);
  function ddayClose() {
    setClick(!isClick);
    // console.log("click")
    setOpen(true);
  }
  return (
    isOpen ?
      <div>
        <Menu main={true} setInter={setInter}/>
        <main>
          <section>{isTablet||isMobile? <Banner mode='tablet' onBtnClick={startInter} />:(
            inter === false ? (
              <InterBanner onBtnClick={startInter} />
            ) : (
              <Banner mode='web' onBtnClick={startInter} />
            )
          )
          }
          </section>
          <section className={`box ${styles.section} ${isMobile && styles.m_section}`}>
            <div>
              <motion.div {...titMotion}>
                <div className={styles.title}>
                  <p className="ko" style={{ fontWeight: '700', fontSize: '4rem' }}>버릇</p>
                  <p>부산대학교 Design & Technology 15회 졸업 전시</p>
                </div>
              </motion.div>
              <div className={styles.content}>
                <motion.div {...bottomMotion}>
                  <div className={`description  ${styles.boxTxt} ${styles.outLine}`}>
                    <p>우리 삶에서 반복되는 행동, 즉 '버릇'이 개인의 삶에 미치는 영향을 조명한다. 과거에서 형성된 버릇은 오늘날의 나를 결정짓고, 우리가 누구인지를 정의 할 수 있게 해주는 요인이 된다.</p>
                    <p>이 전시를 통해 우리는 자신의 일상에서 자주 발생하는 반복적인 행동을 발견하고 이해할 수 있다. 그 과정 속에서 우리는 우리가 무슨 가치를 추구하고, 무엇으로 부터 도망치며, 어떤 상황에 어떻게 반응하는지 직면하게 된다.</p>
                    <p>우리 삶의 흔적인 '버릇'을 통해 나를 인정하고, 타인을 이해하는 태도를 기르는 기회가 될 것이다. </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <section className={`box ${styles.section}  ${isMobile && styles.m_section}`}>
            <div>
              <motion.div {...titMotion}>
                <div className={styles.title}>
                  <p>SCANIMATION</p>
                  <p>전시 아이덴티티</p>
                </div>
              </motion.div>
              <div className={`${styles.content} ${isMobile ? styles.m_twocolumn : styles.twoRow} ${styles.mainPoster}`}>
                <motion.div {...bottomMotion}>
                  <div className={styles.left}>
                    <video src="/asset/poster/main_poster.mp4" autoPlay muted loop></video>

                  </div>
                </motion.div>
                <div className={`${styles.right} column`}>
                  <motion.div {...bottomMotion}>
                    <div className={`${styles.boxTxt} description`}>
                      <p>스캐니메이션은 일정한 간격으로 줄무늬가 적용된 판인 슬릿 마스크를 통해 정적인 이미지를 동적으로 표현하는 시각 기법이다.</p>
                      <p>스캐니메이션을 적용했을 때 반복되는 행동은 전시 주제인 버릇을 효과적으로 전달한다.</p>
                      <p>그렇기에 전시 아이덴티티의 모티브로 선정하여 개인의 버릇을 인식하고 그 의미를 탐구하는 전시주제를 시각적으로 표현하고자 하였다.</p>
                    </div>
                  </motion.div>
                  <div className={`${styles.detail} column`}>
                    <motion.div {...bottomMotion}>
                      <div className={isMobile ? 'column' : 'row'}>
                        <p>STATIC IMAGE</p>
                        <p className="description">우리가 버릇을 인식하려고 노력하는 과정을 상징한다. 슬릿마스크를  통해 스캐니메이션 기법이 적용된 이미지에 동작이 부여되면서 그 본질을 이해할 수 있게 된다. </p>
                      </div>
                    </motion.div>
                    <motion.div {...bottomMotion}>
                      <div className={isMobile ? 'column' : 'row'}>
                        <p>SLIT MASK</p>
                        <p className="description">우리가 버릇을 인식하려고 노력하는 과정을 상징한다. 슬릿마스크를  통해 스캐니메이션 기법이 적용된 이미지에 동작이 부여되면서 그 본질을 이해할 수 있게 된다. </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <section className={`box ${styles.section}  ${isMobile && styles.m_section}`}>
            <div>
              <motion.div {...titMotion}>
                <div className={styles.title}>
                  <p>
                    OPENING
                  </p>
                </div>
              </motion.div>
              <div className={`${styles.content} ${styles.opening}`}>
                <motion.div {...bottomMotion}>
                  <video src="/asset/opening/opening.mkv" controls />
                </motion.div>
              </div>
            </div>
          </section>
          <section className={`box ${styles.section}  ${isMobile && styles.m_section}`}>
            <div>
              <motion.div {...titMotion}>
                <div className={styles.title}>
                  <p>
                    MEMBER
                  </p>
                </div>
              </motion.div>
              <div className={`${styles.content} ${isMobile ? styles.m_twocolumn : styles.twoRow} ${styles.memberDT}`}>
                <motion.div {...bottomMotion}>
                  <div className={styles.left}>
                    <img src="/asset/profile/all_profile.png" alt="DT 프로필" />
                  </div>
                </motion.div>

                <motion.div {...bottomMotion}>
                  <div className={`${styles.right} column`}>
                    <div className={isMobile ? 'column' : 'row'}>
                      <p>위원장</p>
                      <p>이상화</p>
                    </div>
                    <div className={isMobile ? 'column' : 'row'}>
                      <p>부위윈장</p>
                      <p>이지은</p>
                    </div>
                    <div className={isMobile ? 'column' : 'row'}>
                      <p>BRANDING</p>
                      <p>이상화 · 이지은 · 박서해 · 왕신웨 </p>
                    </div>
                    <div className={isMobile ? 'column' : 'row'}>
                      <p>WEB</p>
                      <p>김경린 · 긴은선 · 박정혜 · 최시아</p>
                    </div>
                    <div className={isMobile ? 'column' : 'row'}>
                      <p>DP</p>
                      <p>조성원 · 김동성 · 박승찬 · 오여슬 · 이민서</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
          <section className={`box ${styles.section}  ${isMobile && styles.m_section}`}>
            <div>
              <div>
                <motion.div {...titMotion}>
                  <div className={styles.title}>
                    <p>
                      OFFLINE LOCATION
                    </p>
                  </div>
                </motion.div>
                <div className={`${styles.content} ${styles.map} ${isMobile ? styles.m_twocolumn : styles.twoRow}`}>
                  <motion.div {...bottomMotion}>
                    <div className={`${isMobile ? styles.m_imgMap : styles.imgMap} ${styles.left}`}>
                      {isMobile ?
                        <KakaoMap width={300} height={200} /> :
                        <KakaoMap width={650} height={400} />
                      }
                    </div>
                  </motion.div>
                  <motion.div {...bottomMotion}>
                    <div className={styles.right}>
                      <p>부산 디자인 진흥원 1층 전시장</p>
                      <div>
                        <p>2024.11.02 ~ 11.04</p>
                        <p>Exhibition 10am ~ 6pm</p>
                        <p>Opening 11. 01 6pm </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div> :
      <div className={styles.closeMain}>
        <Ready isDday={isDday} />
        <button onClick={ddayClose} className={styles.btnRemove}></button>
      </div>



  )
} 