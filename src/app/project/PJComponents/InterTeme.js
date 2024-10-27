import { useMediaQuery } from "react-responsive";
import InterStep from "./InterStep";
import "../../../css/PJDetail.css";

export default function InterTheme({ name, title, desc, format, step }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <section className='inter box'>
            <div className={`article ${isMobile ? 'column' : 'row'}`}>
                <div className="subject">
                    <h2>
                        {isMobile ? 'INTERACTIVE ART' : 'INTER ACTIVE ART'}
                    </h2>
                </div>
                <div className="column">
                    <div className={`exp ${isMobile ? 'column' : 'row'}`}>
                        <div className="expTxt column">
                            <p className="titlePj">{title}</p>
                            <p className='description'>{desc}</p>
                            <p className="format">{format}</p>
                        </div>
                        <div className='imgInter' >
                            <img src={`/asset/project/${name}_map.webp`} alt="#" />
                        </div>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <div className='step row'>
                            {step.map((item, idx) => (
                                <InterStep key={idx} imgUrl={`/asset/project/${name}_step${idx + 1}.webp`} step={item} />
                            ))}
                        </div>
                    </div>
                    <div className='interVideo'>
                        hi
                    </div>
                </div>
            </div>
            {/* <div className="colum">
                <div className={` ${isMobile ? 'column m_inter' : 'row inter'}`}>
                    <div className={isMobile ? 'm_subject column' : 'subject row'}>
                        <h2>{isMobile?'INTERACTIVE ART':'INTER ACTIVE ART'}</h2>
                        <div>
                            <p className='titlePJ'>{title}</p>
                            <p className='description'>{desc}</p>
                            <p className="format">{format}</p>
                        </div>
                    </div>

                </div>
                <div className={`interStep  ${isMobile ? 'column' : 'row'}`}>
                    <div className='imgInter' >
                        <img src="/asset/project/web_map.png" alt="#" />
                    </div>
                    <div className={`${isMobile ? 'm_step' : 'step'} row`}>
                        {step.map((item, idx) => (
                            <InterStep key={idx} imgUrl={`/asset/project/web_step${idx + 1}.png`} step={item} />
                        ))}
                    </div>
                </div>
                <div className='interVideo'>
                    hi
                </div>
            </div> */}
        </section>
    )
}