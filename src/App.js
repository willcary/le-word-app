import { useContext } from 'react'
import { Context } from "./Context"
import Header from "./components/Header"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import Alert from './components/Alert'

function App() {
  const { gameOver, isWord, solution } = useContext(Context)
  

  return (
    <div className="game-body">
      <Header />
      <Alert gameOver={gameOver} isWord={isWord} solution={solution} />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
