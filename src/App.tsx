import { createSignal, type Component } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {

  const [onGoing, setOnGoing] = createSignal(true);

  return (
    <div class={styles.app}>
      <h1>Memory Game</h1>
      {onGoing() ? 


      <div class={styles.board}>
      
      </div> 
      
      
      :
      <button class={styles.start} onclick={() => setOnGoing(true)} >Start</button>
      }
    </div>
  );
};

export default App;
