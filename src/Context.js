import React, { useState, useEffect } from 'react'

const Context = React.createContext();

function ContextProvider({children}) {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
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
    // const [evalutations, setEvaluations] = useState([null, null, null, null, null, null])
    const [gameOver, setGameOver] = useState(false);
    const [solution, setSolution] = useState('blaze'.toUpperCase());

    const colorKeyboard = (keyboard, letter, className) => {
        keyboard.forEach(array => {
            array.forEach(key => key.letter === letter && !key.class ? key.class = className : undefined)
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
                flipTile()
                const guess = boardContent[currentRow].join('')
                if (guess === solution) {
                    setTimeout(() => alert('YOU WON!!!!'), 500)
                    setGameOver(true)
                    return
                }
                if (currentRow >= 5) {
                    setTimeout(() => alert('You lost :('), 500)
                    setGameOver(true)
                    return
                }
                setCurrentRow(prevRow => prevRow += 1)
                setCurrentGuess(0)
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

    useEffect(() => {
        window.addEventListener("keydown", handleKeyTap)
        return () => window.removeEventListener("keydown", handleKeyTap)
    }, [currentGuess])

    // useEffect(() => {
    //     fetch("https://random-words5.p.rapidapi.com/getRandom?wordLength=5", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "random-words5.p.rapidapi.com",
    //             "x-rapidapi-key": process.env.REACT_APP_RANDOM_WORDS_API_KEY
    //         }
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json()    
    //         }
    //         throw response
    //     })
    //     .then(data => console.log(data))
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }, [])

    // useEffect(() => {
    //     fetch("https://jspell-checker.p.rapidapi.com/check", {
    //         "method": "POST",
    //         "headers": {
    //             "content-type": "application/json",
    //             "x-rapidapi-host": "jspell-checker.p.rapidapi.com",
    //             "x-rapidapi-key": process.env.REACT_APP_WORD_DICTIONARY_API_KEY
    //         },
    //         "body": {
    //             "language": "enUS",
    //             "fieldvalues": guess,
    //             "config": {
    //                 "forceUpperCase": false,
    //                 "ignoreIrregularCaps": false,
    //                 "ignoreFirstCaps": true,
    //                 "ignoreNumbers": false,
    //                 "ignoreUpper": false,
    //                 "ignoreDouble": false,
    //                 "ignoreWordsWithNumbers": false
    //             }
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }, [])


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


    return (
        <Context.Provider value={{
            // loading,
            // error,
            theme,
            themeToggler,
            handleKey,
            keyboard,
            boardContent,
            boardStyles
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };