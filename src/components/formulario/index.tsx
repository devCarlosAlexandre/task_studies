import React from "react";
import Botao from '../botao';
import './style.scss';
class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione Uma Nova Tarefa
                    </label>

                    <input
                        type="text"
                        name="Tarefa"
                        id="tarefa"
                        placeholder="O QUE VOCÊ QUISER ESTUDAR"
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label>
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
             
                <Botao
                texto = "Adicionar"
                />
            </form>
        );
    }

}
export default Formulario;