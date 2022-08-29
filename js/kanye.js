function quotes(){
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayKanye(data))
}

function displayKanye(quotes){
    const quetesBtn = document.getElementById('displayQuet');
    console.log(quotes);
    quetesBtn.innerText = quotes.quote;
    quetesBtn.style.backgroundColor = 'orange';
    quetesBtn.style.padding = '25px';
    quetesBtn.style.color = 'white';
    quetesBtn.style.textAlign = 'center';
    quetesBtn.style.fontSize = '40px';
    quetesBtn.style.height = '200px';
    quetesBtn.style.margin = '50px';
}