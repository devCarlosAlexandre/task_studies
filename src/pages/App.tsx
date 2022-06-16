import styles from '../pages/style.module.scss'
import React from "react";
import Formm from "../components/form";
import List from '../components/list';
import Stopwatch from '../components/stopwatch';

function App() {
  return (
    <div className={styles.appStyle}>
      <h1>@Alura Studies</h1>
      <Formm />
      <List />
      <Stopwatch />
    </div>

  );
}

export default App;