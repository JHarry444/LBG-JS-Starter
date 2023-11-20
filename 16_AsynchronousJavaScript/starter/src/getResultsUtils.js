

const populateResults = results => {
    let resultsDisplay = document.createElement('section');
    let resultsPlaceholder = document.querySelector('div#resultsPlaceholder');
    let resultsArticle = document.querySelector('article#results');
    
    results.forEach(result => {
        let resultDisplay = document.createElement('p');
        resultDisplay.textContent = `${result.home} ${result.homeScore} - ${result.awayScore} ${result.away}`;
        resultsDisplay.appendChild(resultDisplay);
    });

    resultsArticle.replaceChild(resultsDisplay, resultsPlaceholder);
}

export const getResults = () => {
    // Put your code here
}

    
