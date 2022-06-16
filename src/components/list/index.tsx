import React from 'react';
import styles from'./style.module.scss';

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:000'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:000'
    },
    {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }
    ]
    return (
        <aside className={styles.listaTarefas}>
            <h2>
                Studies of the day
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <div key={index}>
                        <li className={styles.item}>
                            <h3>
                                {item.tarefa}
                            </h3>
                            <span>
                                {item.tempo}
                            </span>
                        </li>
                    </div>
                ))}
            </ul>
        </aside>
    )
}

export default List;