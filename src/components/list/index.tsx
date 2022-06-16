import React from 'react';
import { isTemplateMiddleOrTemplateTail } from 'typescript';
import Item from './item';
import styles from './style.module.scss';

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
                        <Item
                            key={index}
                            {...item}
                        />
                    </div>
                ))}
            </ul>
        </aside>
    )
}

export default List;