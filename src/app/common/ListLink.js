import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive";
import styles from "../../css/ListLink.module.css"
export default function ListLink({ prevName, nextName, prevURL, nextURL, listURL }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={`${styles.listLinkWrap} row`}>
            <Link to={prevURL} className={`${isMobile ? styles.m_listLink : styles.listLink} column`}>
                {/* <img src="/asset/icon/arrowL.svg" alt="이전" /> */}
                <p>{prevName}</p>
            </Link>
            <Link to={listURL} className={`${isMobile ? styles.m_listLink : styles.listLink} column`}>
                <p>목록</p>
            </Link>
            <Link to={nextURL} className={`${isMobile ? styles.m_listLink : styles.listLink} column`}>
                {/* <img src="/asset/icon/arrowR.svg" alt="다음" /> */}
                <p>{nextName}</p>
            </Link>

        </div>
    )
}
export function setPrev(type, data) {
    const prev = data.index === 0 ? type.list[type.list.length - 1] : type.list[data.index - 1];
    return prev;
}
export function setNext(type, data) {
    const next = data.index === type.list.length - 1 ? type.list[0] : type.list[data.index + 1];
    return next;
}