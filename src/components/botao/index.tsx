import React from "react";
import './style.scss';
class Botao extends React.Component<{texto: String}>{
    render() {
        return (
            <button className="Botao">
            {this.props.texto}
            </button>
        )
    }
}

export default Botao;