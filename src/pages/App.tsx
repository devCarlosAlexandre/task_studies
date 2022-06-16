import styles from '../pages/style.module.scss'
import React from "react";
import Formulario from "../components/formulario";
import Lista from '../components/lista';

function App() {
  return (
    <div className={styles.appStyle}>
      <h1>Alura Studies</h1>
      <Formulario />
      <Lista />
    </div>

  );
}

export default App;