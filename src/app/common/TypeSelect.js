import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { saveVisit } from "../../components/store";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu"
import IndivList from '../common/IndivLIst';
import Teams from "./Teams";
import Footer from "./Footer";
import styles from '../../css/TypeSelect.module.css'

export default function TypeSelect({ type }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    let dispatch = useDispatch();
    const lastVisit = useSelector((state) => state.lastVisit).visit; // useSelector를 컴포넌트 상단에서 호출

    useEffect(() => {
        // lastVisit 값을 사용하여 필요한 작업을 수행
        // console.log(lastVisit); // 예시로 lastVisit 값을 콘솔에 출력
    }, [lastVisit]); // lastVisit이 변경될 때마다 useEffect 실행
    return (
        <div>
            <Menu page={type} />
            <main className="contentsContainer">
                <div className={isMobile?styles.m_typeWrap:styles.typeWrap}>
                    <span>{type}</span>
                    <div className={`${styles.radioGruop} row`}>
                        <p onClick={() => dispatch(saveVisit('indiv'))} className={lastVisit === 'indiv' ? styles.activ : styles.disable}>INDIVIDUAL</p>
                        <p onClick={() => dispatch(saveVisit('team'))} className={lastVisit === 'team' ? styles.activ : styles.disable}>TEAM</p>
                    </div>
                </div>
                {lastVisit === 'indiv' && <IndivList type={type} />}
                {lastVisit === 'team' && <Teams type={type} />}
            </main >
            <Footer />
        </div >
    )
}