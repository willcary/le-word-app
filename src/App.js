import Header from "./components/Header"
import Board from "./components/Board"
import Keyboard from "./components/Keyboard"

function App() {
  return (
    <div className="game-body">
      <Header />
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
