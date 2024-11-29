import styles from "../../css/Title.module.css";

function Title({ title }) {
    return (
        <div className={styles.loc}>
            <p>{title}</p>
        </div>

    )
}
export default Title;