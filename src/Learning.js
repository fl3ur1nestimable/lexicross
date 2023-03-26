import themes from './themes/themes.json';

function Learning(){
    var choice = localStorage.getItem("selectedTheme");
    var theme = themes[choice];

    return (
        <div>
            <h1>Theme: {choice}</h1>
            <ul>
                {theme.map((word) => (
                    <li key={word.word}>
                        <h2>{word.word}</h2>
                        <p>{word.definition}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => window.location.replace('/')}>
                    Return to home page
                </button>
        </div>
    );
}

export default Learning;