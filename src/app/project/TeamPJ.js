import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TeamData from "../../components/team.json";
import styles from "../../css/TeamPJ.module.css";

function TeamPJ({ data }) {
    const team = TeamData.list.find(item => item.name === data);
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <Link to={`/project/team/${team.name}`} className={styles.linkTeamPJ}>
            <div className={`${styles.teamCard} ${isMobile ? `${styles.m_card} column` : 'row'}`}>
                <div className={styles.imgPj}>
                    <div>
                        <img src="/asset/video/videoImg.png" alt="PROJECT 이미지" />
                    </div>
                    <div>
                        <p>프로젝트 보러가기</p>
                    </div>
                </div>
                <div className={`${styles.cardInfo} ${isMobile ? 'row' : 'column'}`}>
                    <div className="column">
                        <p>{team.name}</p>
                        <h1>{team.mainTitle}</h1>
                    </div>
                    <ul className="column">
                        {team.member.map((item) => (
                            <li key={item}>{item}</li>
                        ))}

                    </ul>
                </div>
            </div>
        </Link>
    )

}
export default TeamPJ;