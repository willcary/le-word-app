import React, { useState, useEffect } from 'react'

const Context = React.createContext();

function ContextProvider({children}) {
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [theme, setTheme] = useState('light');
    const guess = 'board'
    const [boardContent, setBoardContent] = useState([
        ['b', 'o', 'a', 'r', 'd'],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ])
    const [currentRow, setCurrentRow] = useState(0);
    const [currentGuess, setCurrentGuess] = useState(0);

    // const [evalutations, setEvaluations] = useState([null, null, null, null, null, null])
    // const [gameStatus, setGameStatus] = useState(false);
    const [solution, setSolution] = useState('');
    
    function handleKey(e) {
        const { value } = e.target
        const newBoardContent = [...boardContent]
        newBoardContent[currentRow][currentGuess] = value
        setBoardContent(newBoardContent)
        console.log(value + ' clicked!')
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