import React from "react";
import Bottomm from '../buttom';
import styles from './style.module.scss';
class Formm extends React.Component {
    render(): React.ReactNode {
        return (
            <form className={styles.novaTarefa}>
                <div className={styles.inputContainer}>
                    <label htmlFor="task">
                        Add a New Task...
                    </label>

                    <input
                        type="text"
                        name="taks"
                        id="taks"
                        placeholder="Enter a new task..."
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>

                <Bottomm>
                    Add
                </Bottomm>
            </form>
        );
    }

}
export default Formm;