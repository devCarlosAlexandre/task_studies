import React from 'react';
import './style.scss';

function Lista() {
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
        <aside className="listaTarefas">
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <div key={index}>
                        <li className='item'>
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

export default Lista;