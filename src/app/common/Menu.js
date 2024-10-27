import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveVisit } from '../../components/store';
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SlideMenu from "./SlideMenu";
import styles from "../../css/Menu.module.css"

function Menu({ page, main }) {
    let dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // let background = main ? "none" : "var(--black)";
    // let color = main ? "var(--black)" : "white";
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const isTablet = useMediaQuery({
        query: "(max-width:1080px)"
    });

    const [isMenu, setIsMenu] = useState(false);
    let openMenu = () => {
        setIsMenu(!isMenu);
    }

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    return (
        <nav
            className={`${styles.gnb} ${styles.stickyNav}`}
            style={{
                transition: 'transform 0.3s',
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
            }}
        >

            <div className={`${styles.gnbWrap}`}>
                {isMobile ? <span className={`${styles.m_loc}`}>{page}</span> :
                    <div className={styles.mainLink}>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.active : "")}>
                            <p className="ko">버릇</p>
                        </NavLink>
                    </div>
                }
                {isTablet ?

                    <div className={styles.nav}>
                        <div onClick={openMenu} className={`${styles.icMenu} ${isMenu ? styles.active : ''}`} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {isMenu ? <SlideMenu onBtnClick={openMenu} /> : ""}
                    </div>
                    :

                    <div className={`${styles.nav} ${styles.w_font}`} >
                        <div>
                            <NavLink to={'/about'} className={({ isActive }) => (isActive ? styles.active : "")} onClick={() => dispatch(saveVisit('indiv'))}>
                                <p title='INTRODUCTION'>INTRODUCTION</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/profile'} className={({ isActive }) => (isActive ? styles.active : "")} onClick={() => dispatch(saveVisit('indiv'))}>
                                <p title='PROFILE'>PROFILE</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/project'} className={({ isActive }) => (isActive ? styles.active : "")} onClick={() => dispatch(saveVisit('indiv'))}>
                                <p title='PROJECT'>PROJECT</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/guestbook'} className={({ isActive }) => (isActive ? styles.active : "")} onClick={() => dispatch(saveVisit('indiv'))}>
                                <p title='GUESTBOOK'>GUESTBOOK</p>
                            </NavLink>
                        </div>

                    </div>
                }

            </div>
        </nav>
    )
}
export default Menu;