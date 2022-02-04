import React, { useState, useEffect } from 'react'

const Context = React.createContext();

function ContextProvider({children}) {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [theme, setTheme] = useState('light');
    const [boardContent, setBoardContent] = useState([
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
    const [solution, setSolution] = useState('GUESS');

    const flipTile = () => {
        boardContent[currentRow].forEach((letter, index) => {
            if (letter === solution[index]) {
                document.getElemementByID(`boardRow-${currentRow}-tile-${currentGuess}`).classList.add('green-tile')
                return
            } else if (solution) {
                document.getElemementByID(`boardRow-${currentRow}-tile-${currentGuess}`).classList.add('yellow-tile')
                return
            } else {
                document.getElemementByID(`boardRow-${currentRow}-tile-${currentGuess}`).classList.add('gray-tile')
                return
            }

        })
    } 
    
    function handleKey(e) {
        const { value } = e.target
        const newBoardContent = [...boardContent]
        // ================== Need to create function for row submisson that then adds to currentRow. ===================================
        if (value === "DEL") {
            if (currentGuess > 0) {
                newBoardContent[currentRow][currentGuess - 1] = ''
                setCurrentGuess(prevGuess => prevGuess -= 1)
            }
            return
        }
        if (value === "ENTER") {
            if (currentGuess === 5) {
                const guess = boardContent[currentRow].join('')
                flipTile()
                if (guess === solution) {
                    alert('YOU WON!!!!')
                    setGameOver(true)
                    return
                }
                if (currentRow >= 5) {
                    alert('You lost :(')
                    setGameOver(true)
                    return
                }
                setCurrentGuess(0)
                setCurrentRow(prevRow => prevRow += 1)
            }
            return
        }

        if (currentGuess < 5 && currentRow < 6) {
            newBoardContent[currentRow][currentGuess] = value
            setBoardContent(newBoardContent)
            setCurrentGuess(prevGuess => prevGuess += 1)
            console.log(currentGuess, currentRow)
        }
    }

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
            boardContent
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };