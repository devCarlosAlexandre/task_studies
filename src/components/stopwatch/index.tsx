import Bottomm from "../buttom"
import Clock from "./clock"
import styles from "./stopwatch.module.scss";
export default function Stopwatch() {
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={styles.relogioWrapper}>
                <Clock />
            </div>
            <Bottomm>
                Start
            </Bottomm>
        </div>
    )
}