import { useContext } from 'react'
import { Context } from "./Context"
import Header from "./components/Header"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import Alert from './components/Alert'

function App() {
  const { theme, gameOver, isWord, solution } = useContext(Context)
  const bodyClass = theme === 'dark' ? 'body-darkmode' : undefined

  return (
    <div className={bodyClass}>
      <div className="game-body">
        <Header />
        <Alert gameOver={gameOver} isWord={isWord} solution={solution} />
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
