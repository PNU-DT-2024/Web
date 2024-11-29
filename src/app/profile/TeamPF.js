
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
        <div className={`${isMobile ? styles.m_teamCard : styles.teamCard} column`}>
            <div className={`${styles.teamTitle} column`}>
                <h1>{team.name}</h1>
                <p className="description">{team.role}</p>
            </div>
            <div className={`${styles.teamMember} ${isMobile ? 'column' : 'row'}`}>
                <div className={`${styles.member} row`}>
                    {team.member.map((member) => (
                        <Link to={`/profile/indiv/${member}`}>
                            <div className={styles.imgMember}>
                                <img src={`/asset/profile/${member}_profile.webp`} alt="#" />
                            </div>
                            <p>{member}</p>

                        </Link>
                    ))}
                </div>
                <div className={styles.btnMove}>
                    <Link to={`/project/team/${team.name}`}>
                        <span>프로젝트 보러가기</span>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default TeamPF;