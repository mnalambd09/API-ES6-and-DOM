const loadCountry = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = (countrys) => {
    const countryDiv = document.getElementById('countryDiv');
    for(const country of countrys){
        const counDiv = document.createElement('div');
        console.log(country);
        counDiv.classList.add('country');
        counDiv.innerHTML = `
        <h2>Country Name : ${country.name}</h2>
        <h2>Native Name : ${country.nativeName}</h2>
        <h3>Capital : ${country.capital}</h3>
        <h3>Border : ${country.borders}</h3>
        <h1>Flag</h1>
        <img src="${country.flags.png}" alt="">
        <h3>Alpha code : ${country.alpha3Code}</h3>
        <h3>Calling Code : ${country.callingCodes}</h3>
        <h3>Is Independent ?: ${country.independent}</h3>
        <h3>Language : ${country.languages[0].name}</h3>
        <h3>Population : ${country.population}</h3>
        <h3>Region : ${country.subregion}</h3>
        <h3>Time Zone : ${country.timezones}</h3>
        `
        countryDiv.appendChild(counDiv);
    }
}

loadCountry()