import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import styles from "../../css/IndivPF.module.css";

export default function IndivPF({ indiv }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.memberCard} ${isMobile?'column':'row'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isMobile ?
        <div className={styles.m_imgAction}>
          <img src="/asset/profile/박정혜_profile.png" alt={indiv.name} className={styles.m_imgBase} />
        </div>
        :
        <div className={styles.imgAction}>
          <img src={isHovered ? '/asset/profile/trigger.png' : ""} className={`${styles.imgTrigger} ${isHovered ? styles.show : ""}`} alt="" />
          <img src={isHovered ? "/asset/profile/hoverProfileImg.png" : "/asset/profile/박정혜_profile.png"} loading="lazy" alt={indiv.name} className={styles.imgBase} />
        </div>
      }
      <div className={`${isMobile ? styles.m_memberInfo : styles.memberInfo} column`} >
        <h2>{indiv.name}</h2>
        <p>{indiv.engName}</p>
      </div>
    </div>
  );
}
