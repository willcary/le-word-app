import { useState, useContext } from "react"
import { Context } from "../Context"
import "../css/header.css"
import StatsModal from "./StatsModal"
import HelpModal from "./HelpModal"

export default function Header() {
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showStatsModal, setShowStatsModal] = useState(false)
  const [closingModal, setClosingModal] = useState(false)
  const { theme, themeToggler } = useContext(Context)
  const iconColor = () => theme === 'light' ? '#878a8c' : '#565758'

  const help = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path fill={iconColor()} d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
    </svg>
  const stats = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path fill={iconColor()} d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
    </svg>
  const light = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={iconColor()} viewBox="0 0 16 16">
      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>
  const dark = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={iconColor()} viewBox="0 0 16 16">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
    </svg>

  function openHelpModal() {
    setShowHelpModal(true)
  }

  function openStatsModal() {
    setShowStatsModal(true)
  }
  
  function closeHelpModal() {
    setClosingModal(true)
    setTimeout(() => {
      setClosingModal(false)
      setShowHelpModal(false)
    }, 190)
  }

  function closeStatsModal() {
    setClosingModal(true)
    setTimeout(() => {
      setClosingModal(false)
      setShowStatsModal(false)
    }, 190)
  }

  return <header>
      <div className="menu">
        <button className="header-btn" onClick={openHelpModal}>{help}</button>
      </div>
      <h1 className="title">Le Word</h1>
      <div className="menu">
        <button className="header-btn" onClick={openStatsModal}>{stats}</button>
        <button onClick={themeToggler} className="header-btn">{theme === 'light' ? dark : light}</button>
      </div>
      <HelpModal show={showHelpModal} close={closeHelpModal} closing={closingModal} />
      <StatsModal show={showStatsModal} close={closeStatsModal} closing={closingModal} />
  </header>;
}
