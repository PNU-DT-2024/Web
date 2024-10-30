import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { saveVisit } from '../../components/store';
import styles from "../../css/SlideMenu.module.css";
export default function SlideMenu({ onBtnClick }) {
    let dispatch = useDispatch();
    function menuClick() {
        dispatch(saveVisit('indiv'))
        onBtnClick();
    }
    return (
        <div className={`${styles.gnbWrap} column`}>
            <div className={styles.slideNav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                            onClick={menuClick}>
                            <p className={`ko ${styles.mainLink}`}>버릇</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                            onClick={menuClick}>
                            <p>INTRODUCTION</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                            onClick={menuClick}>
                            <p>PROFILE</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                            onClick={menuClick}>
                            <p>PROJECT</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/guestbook"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                            onClick={menuClick}>
                            <p>GUESTBOOK</p>
                        </NavLink>
                    </li>


                </ul >
            </div>
        </div >
    )
}