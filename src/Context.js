import React, { useState, useEffect } from 'react'
import { storageAvailable } from './assets/js/storageAvailable';

const Context = React.createContext();

function ContextProvider({children}) {
    const [theme, setTheme] = useState('light');
    const [keyboard, setKeyboard] = useState([
        [
            {letter: 'Q', class: ''},
            {letter: 'W', class: ''},
            {letter: 'E', class: ''},
            {letter: 'R', class: ''},
            {letter: 'T', class: ''},
            {letter: 'Y', class: ''},
            {letter: 'U', class: ''},
            {letter: 'I', class: ''},
            {letter: 'O', class: ''},
            {letter: 'P', class: ''}
        ], 
        [
            {letter: 'A', class: ''},
            {letter: 'S', class: ''},
            {letter: 'D', class: ''},
            {letter: 'F', class: ''},
            {letter: 'G', class: ''},
            {letter: 'H', class: ''},
            {letter: 'J', class: ''},
            {letter: 'K', class: ''},
            {letter: 'L', class: ''}
        ],
        [
            {letter: 'ENTER', class: 'wide-key'},
            {letter: 'Z', class: ''},
            {letter: 'X', class: ''},
            {letter: 'C', class: ''},
            {letter: 'V', class: ''},
            {letter: 'B', class: ''},
            {letter: 'N', class: ''},
            {letter: 'M', class: ''},
            {letter: 'DEL', class: 'wide-key'}
        ]
    ])
    const [boardContent, setBoardContent] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])
    const [boardStyles, setBoardStyles] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])
    let [currentRow, setCurrentRow] = useState(0)
    let [currentGuess, setCurrentGuess] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [isWord, setIsWord] = useState(true)
    const [solution, setSolution] = useState('WORDY')
    const [gamesPlayed, setGamesPlayed] = useState(0)
    const [gamesWon, setGamesWon] = useState(0)
    const [guessDistribution, setGuessDistribution] = useState([
        {name: '1', count: 0},
        {name: '2', count: 0}, 
        {name: '3', count: 0}, 
        {name: '4', count: 0}, 
        {name: '5', count: 0}, 
        {name: '6', count: 0}
    ])
    const [winPercent, setWinPercent] = useState(0)
    const [showStatsModal, setShowStatsModal] = useState(false)

    // ====================================== Logic for handling key presses and updating state accordingly =========================================
    const colorKeyboard = (keyboard, letter, className) => {
        keyboard.forEach(array => {
            array.forEach(key => {
                if (key.letter === letter) {
                    if (className === 'green-overlay') {
                        key.class = className
                    } else if (className === 'yellow-overlay' && key.class !== 'green-overlay') {
                        key.class = className
                    } else if (className === 'gray-overlay' && !key.class) {
                        key.class = className
                    }
                }
            })
        })
    }

    const flipTile = () => {
        const newBoardStyles = [...boardStyles]
        const newKeyboard = [...keyboard]
        let mutableSolution = solution;
        boardContent[currentRow].forEach((letter, index) => {
            if (letter === solution[index]) {
                newBoardStyles[currentRow][index] = 'flip green-overlay'
                colorKeyboard(newKeyboard, letter, 'green-overlay')
                mutableSolution = mutableSolution.replace(letter, '')
                return
            } else if (mutableSolution.includes(letter)) {
                newBoardStyles[currentRow][index] = 'flip yellow-overlay'
                colorKeyboard(newKeyboard, letter, 'yellow-overlay')
                mutableSolution = mutableSolution.replace(letter, '')
                return
            } else {
                newBoardStyles[currentRow][index] = 'flip gray-overlay'
                colorKeyboard(newKeyboard, letter, 'gray-overlay')
                return
            }
        })
        setBoardStyles(newBoardStyles)
        setKeyboard(newKeyboard)
    } 

    const shakeTiles = () => {
        const newBoardStyles = [...boardStyles]
        newBoardStyles[currentRow].forEach((item, index, array) => array[index] = 'shake')
        setBoardStyles(newBoardStyles)
        setTimeout(() => {
            setIsWord(false)
            newBoardStyles[currentRow].forEach((item, index, array) => array[index] = '')
            setBoardStyles(newBoardStyles)
        }, 500)
        setTimeout(() => setIsWord(true), 2000)
    }

    const guessSubmitLogic = (guess) => {
        const newGuessDist = [...guessDistribution]
        if (guess === solution) {
            setTimeout(() => setShowStatsModal(true), 800)
            setGamesPlayed(prevCount => prevCount += 1)
            setGamesWon(prevCount => prevCount += 1)
            newGuessDist[currentRow].count += 1
            setGuessDistribution(newGuessDist)
            return
        }
        if (currentRow >= 5) {
            setGameOver(true)
            setTimeout(() => setShowStatsModal(true), 800)
            setGamesPlayed(prevCount => prevCount += 1)
            return
        }
        setCurrentRow(prevRow => prevRow += 1)
        setCurrentGuess(0)
    }

    function updateKeyBoard(value) {
        const newBoardContent = [...boardContent]
        if (value === "DEL" || value === "BACKSPACE") {
            if (currentGuess > 0) {
                newBoardContent[currentRow][currentGuess - 1] = ''
                setCurrentGuess(prevGuess => prevGuess -= 1)
            }
            return
        }
        if (value === "ENTER") {
            if (currentGuess >= 5) {
                const guess = boardContent[currentRow].join('')
                fetch("https://bing-spell-check2.p.rapidapi.com/spellcheck?mode=proof&text=" + guess, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "bing-spell-check2.p.rapidapi.com",
                        "x-rapidapi-key": process.env.REACT_APP_WORD_DICTIONARY_API_KEY
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.flaggedTokens.length > 0) {
                        shakeTiles()
                        return
                    } else {
                        flipTile()
                        guessSubmitLogic(guess)
                    }
                })
                .catch(err => {
                    console.error(err);
                    guessSubmitLogic(guess)
                })
            }
            return
        }
        if (currentGuess < 5 && currentRow < 6) {
            newBoardContent[currentRow][currentGuess] = value
            setBoardContent(newBoardContent)
            setCurrentGuess(prevGuess => prevGuess += 1)
        }
    }

    function handleKey(e) {
        const { value } = e.target
        updateKeyBoard(value)
    }

    function handleKeyTap(e) {
        const value = e.key.toUpperCase()
        const regex = new RegExp('^[A-Z]$')
        if (regex.test(value) || value === "BACKSPACE" || value === "ENTER") {
            updateKeyBoard(value)
        }
    }

    // Theme Toggler Function =================================================================================================================
    function themeToggler() {
        if (theme === 'light') {
            setTheme('dark')
            document.body.classList.add('body-dark');
        } else {
            setTheme('light');
            document.body.classList.remove('body-dark');
        }
    }

    // ====================================== Fetch request for a random word to start the game =========================================

    useEffect(() => {
        fetch("https://random-words5.p.rapidapi.com/getMultipleRandom?count=5&wordLength=5", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "random-words5.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RANDOM_WORDS_API_KEY
            }
        })
        .then(response => response.json())
        .then(data => setSolution(data[0].toUpperCase()))
        .catch(err => {
            console.error(err);
        })
        if (storageAvailable('localStorage')) {
            const storedGamesPlayed = localStorage.getItem('gamesPlayed')
            const storedGamesWon = localStorage.getItem('gamesWon')
            const storedGuessDistribution = localStorage.getItem('guessDistribution')
            if (storedGamesWon) {
                setGamesWon(Number(storedGamesWon))
            }
            if (storedGamesPlayed) {
                setGamesPlayed(Number(storedGamesPlayed))
            }
            if (Object.values(storedGuessDistribution).some(item => item)) {
                setGuessDistribution(JSON.parse(storedGuessDistribution))
            }
        }
    }, [])

    // Update Win Percent
    useEffect(() => {
        if (gamesWon / gamesPlayed) {
            setWinPercent(Math.round((gamesWon / gamesPlayed) * 100))
        }
    }, [gamesWon, gamesPlayed]) 

    // Updating Local Storage Data
    useEffect(() => localStorage.setItem('gamesWon', gamesWon.toString()), [gamesWon])
    useEffect(() => localStorage.setItem('gamesPlayed', gamesPlayed.toString()), [gamesPlayed])
    useEffect(() => localStorage.setItem('guessDistribution', JSON.stringify(guessDistribution)), [guessDistribution])


    // Add Event Listeners for Comp Keyboard Interactions 
    useEffect(() => {
        window.addEventListener("keydown", handleKeyTap)
        return () => window.removeEventListener("keydown", handleKeyTap)
    }, [currentGuess])

    
    // Add Event Listeners for Comp Keyboard Interactions 
    window.addEventListener('resize', () => {
        let vh = window.innerHeight
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    })


    return (
        <Context.Provider value={{
            theme,
            themeToggler,
            handleKey,
            keyboard,
            boardContent,
            boardStyles,
            gamesPlayed,
            winPercent,
            guessDistribution,
            showStatsModal,
            setShowStatsModal,
            gameOver,
            isWord,
            solution
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };