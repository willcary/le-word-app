import Header from "./components/Header"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"
import Alert from './components/Alert'

function App() {
  return (
    <div className="game-body">
      <Header />
      <Alert />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
