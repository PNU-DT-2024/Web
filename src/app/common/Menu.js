import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import SlideMenu from "./SlideMenu";
import styles from "../../css/Menu.module.css"

function Menu({ page }) {
    let background = page === "main" ? "none" : "black";
    let color = page === "main" ? "black" : "white";
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const [isMenu, setIsMenu] = useState(false);
    let openMenu = () => {
        setIsMenu(!isMenu);
    }

    return (
        <nav className={`${styles.menuWrap} ${isMobile ? styles.stickyNav : ''}`} style={{ backgroundColor: background }}>
            <div className={`${styles.menuContainer}`}>
                <div className={styles.mainLink}>
                    <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.active : "")}>
                        <p style={{ color: color }}>버릇</p>
                    </NavLink>
                </div>
                {isMobile ?

                    <div className={styles.nav} style={{ color: color }}>
                        {/* <span onClick={openMenu}><img src="/img/icon/ic_menu.png " alt="메뉴" /></span> */}
                        <div onClick={openMenu} className={`${styles.icMenu} ${isMenu?styles.active:''}`} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {isMenu ? <SlideMenu onBtnClick={openMenu} /> : ""}
                    </div>
                    :

                    <div className={`${styles.nav} ${styles.w_font}`} >
                        <div>
                            <NavLink to={'/profile'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p style={{ color: color }} >프로필</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/project'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p style={{ color: color }}>프로젝트</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/guestbook'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p style={{ color: color }}>방명록</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/about'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p style={{ color: color }}>소개</p>
                            </NavLink>
                        </div>
                    </div>
                }

            </div>
        </nav>
    )
}
export default Menu;