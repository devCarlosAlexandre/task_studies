import React from "react";
import styles from './style.module.scss';
interface IProps {
    children: React.ReactNode
}

class Bottomm extends React.Component<IProps>{
    render() {
        return (
            <button className={styles.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Bottomm;