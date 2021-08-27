
const loadQuotes = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>  displayQuote(data));

}

const displayQuote = quote => {

    const qouteElement = document.getElementById('quotes');
    qouteElement.innerText = quote.quote;
}