import styles from '../style.module.scss'

export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }) {
    return (
        <li  className={styles.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}