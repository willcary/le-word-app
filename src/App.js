import { useContext } from 'react'
import { Context } from "./Context"
import Header from "./components/Header"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import GuessChart from './components/GuessChart'

function App() {
  const { theme } = useContext(Context)
  const bodyClass = theme === 'dark' ? 'body-darkmode' : undefined

  return (
    <div className={bodyClass}>
      <div className="game-body">
        <Header />
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
