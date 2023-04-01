import themes from './themes/themes.json';
import './learning.css';

function Learning(){
    var choice = localStorage.getItem("selectedTheme");
    var theme = themes[choice];

    return (
        <div className='learn'>
            <h1>Theme : {choice}</h1>
            <div className='dic'>
                <ul className='dic-list'>
                    {theme.map((word) => (
                    <li key={word.word}>
                        <p><strong>{word.word}</strong> : {word.definition}</p>
                    </li>
                    ))}
                </ul>
                </div>
            <div className='return'>
                <button className='btnreturn' onClick={() => window.location.replace('/')}>Return to home page</button>
            </div>
        </div>
    );
}

export default Learning;