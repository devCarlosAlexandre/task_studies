import React from "react";
import Botao from '../botao';
import './style.scss';
class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="Tarefa">
                        Adicione uma nova tarefa
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
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