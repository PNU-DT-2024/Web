import styles from "../../css/IndivPJ.module.css";

export default function IndivPJ({ indiv, mobile, tablet }) {
    return (
        <div className={`${styles.memberCard} ${mobile || tablet? styles.m_card:''}`}>
            <div>
                <img src="/asset/poster/poster.png" alt={indiv.name}  className={styles.imgPj}/>
            </div>
            <div className={`${mobile ? styles.m_Info : styles.Info} ${styles.memberInfo} column`}>
                <h2>{indiv.mainTitle}</h2>
                <p>{indiv.name}</p>
            </div>
        </div>

    )

}
