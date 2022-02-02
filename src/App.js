import { useContext } from 'react'
import { Context } from "./Context"
import Header from "./components/Header"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"

function App() {
  const { theme } = useContext(Context)
  const bodyClass = theme === 'dark' ? 'body-darkmode' : undefined

  return (
    <div className={bodyClass}>
      <div className="game-body">
        <Header />
        {/* <h1>{theme}</h1> */}
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
