
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import TeamData from "../../components/team.json";
import styles from "../../css/TeamPF.module.css";
function TeamPF({ data }) {
    const team = TeamData.list.find(item => item.name === data);

    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={`${isMobile?styles.m_teamCard:styles.teamCard} column`}>
            <div className={styles.teamTitle}>
                <h1>{team.name}</h1>
                <p className="description">{team.role}</p>
            </div>
            <div className={isMobile ? styles.m_teamMember : styles.teamMember}>
                <p>구성원</p>
                <div className={styles.member}>

                    {team.member.map((member) => (
                        <Link to={`/profile/indiv/${member}`}>
                            <div className={styles.imgMember}>
                                <img src="/img/profileImg/박정혜_profile.jpg" alt="#" />
                            </div>
                            <p>{member}</p>

                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <Link to={`/project/team/${team.name}`} className={styles.btnMove} style={{ width: isMobile ? '' : '150px' }}>
                    <span>작품 보러가기</span>
                </Link>
            </div>
        </div>
    )
}
export default TeamPF;