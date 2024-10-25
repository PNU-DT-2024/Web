import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu"
import Title from "../common/Title";
import Footer from "../common/Footer"
import styles from "../../css/About.module.css";

export default function About() {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div>
            <Menu page='INTRODUCTION' />
            <main className="contentsContainer">
                {isMobile ? <></> : <Title title='INTRODUCTION' />}
                <section className={styles.aboutWrap}>
                    <article className={isMobile ? 'column' : 'row'}>
                        <div className={styles.title}><p>디자인학과</p></div>
                        <div className='description'>
                            <p>
                                발전하는 테크놀로지로인한 시간과 공간의 축소에 의하여 세계는 점점 하나의 생활권으로 변하고 있다.
                                따라서 본 학과는 이러한 과거, 현재, 미래의 인간생활방식을 이해하고 동양과 서양, 과학과 예술의
                                다양한 가치를 유기적으로 결합한 새로운 정보전달의 방법을 생산하여 빠르게 변화하는 환경에 유익한 가치를 일으키는 디자인방법론을 연구한다.
                            </p>
                            <p>
                                그리하여 급변하는 현대사회의 요구를 앞서 이해하고 디자인 제분야의 심도있는 학습은 물론 타 분야와의 횡적 교류를 통해 새로운 이론과 교육방법을 창출한다.
                            </p>
                            <p>
                                이러한 전반적인 방법론을 바탕으로하여 점차 그 중요성이 높아지는 공학적 접근을 통하여 새로운 테크놀로지의 메커니즘을 이해하고 그 결과로 인간환경과 유기적으로 결합된 디자인 결과물을 생산하는 책임있는 디자이너를 양성함을 그목적으로 한다.
                            </p>
                        </div>
                    </article>
                    <article className={isMobile ? 'column' : 'row'}>
                        <div className={styles.title}><p>디자인앤테크놀로지전공</p></div>
                        <div className='description'>
                            <p>
                                첨단 전자 및 컴퓨터 공학을 포함한 기술적인 요소와 예술적 감성의 조화를 필요로 하는 영상물의 분석, 기획, 제작, 편집 기법 및 첨단 컴퓨터 기술의 실용적인 교육을 통해 영화 및 비디오 영상, 디지털 시네마, 디지털 방송 등에 활용되는 디지털콘텐츠 제작 기술 능력을 배양하고, 우수한 디지털콘텐츠를 개발하여 산업화할 수 있는 디자인, 공학 전문 인력을 양성하여 지역사회와 국가의 디지털콘텐츠 산업 발전 및 경쟁력 제고에 이바지함을 목표로 한다.
                            </p>
                        </div>
                    </article>
                    <article className={isMobile ? 'column' : 'row'}>
                        <div className={styles.title}><p>졸업 후 진로</p></div>
                        <div className='description'>
                            <p>국내외 우수한 대기업과 광고홍보회사, 언론사 웹디자인 관련회사, 게임 및 영상관련 회사, 애니메이션관련 회사 등에서 많은 졸업생들이 디자이너로서의 신선한 감각과 탁월한 디자인 능력을 인정받으며 일하고 있다.</p>
                            <p>이중에는 이런 사회적 경험을 기반으로 디자인회사를 경영하기도 하며, 보다 넓고 깊은 학문에의 정진을 위해 석/박사과정에 진학하기도 한다.</p>
                        </div>
                    </article>
                    <article className={isMobile ? 'column' : 'row'}>
                        <div className={styles.title}><p>지도교수 & 전임교수</p></div>
                        <div className={styles.prof}>
                            <div>
                                <div className={styles.imgProf}>
                                    <img src="/asset/profile/이화세교수님.webp" alt="이화세 교수님" />
                                </div>
                                <div>
                                    <p>이화세</p>
                                    <p>HCI</p>
                                </div>
                            </div>
                            <div >
                                <div className={styles.imgProf}>
                                    <img src="/asset/profile/김철기교수님.webp" alt="김철기 교수님" />
                                </div>
                                <div>
                                    <p>김철기</p>
                                    <p>UX / AI / 감성공학</p>
                                </div>
                            </div>
                            <div >
                                <div className={styles.imgProf}>
                                    <img src="/asset/profile/김태완교수님.webp" alt="김태완 교수님" />
                                </div>
                                <div>
                                    <p>김태완</p>
                                    <p>DIGITAL CONTENT DESIGN</p>
                                </div>
                            </div>
                            <div >
                                <div className={styles.imgProf}>
                                    <img src="/asset/profile/홍동진교수님.webp" alt="홍동진 교수님" />
                                </div>
                                <div>
                                    <p>홍동진</p>
                                    <p>IMAGE PROCESSING / ML</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    )
}