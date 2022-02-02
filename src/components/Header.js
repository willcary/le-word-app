import { useContext } from "react"
import { Context } from "../Context"

export default function Header() {
  const { theme, themeToggler } = useContext(Context)

  return <header>
      <div className="menu">
        help
      </div>
      <div className="title"> Wordle </div>
      <div className="menu">
        <button className="header-btn">stats</button>
        <button onClick={themeToggler} className="header-btn">{theme === 'light' ? 'light' : 'dark'}</button>
      </div>
  </header>;
}
