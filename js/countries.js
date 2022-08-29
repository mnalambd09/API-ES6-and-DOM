const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const countryDiv = document.getElementById('country-detail');
    for(const country of countries){
        console.log(country);
        const creatDiv = document.createElement('div');
        creatDiv.classList.add('country');
        creatDiv.innerHTML = `
            <h1>Country : ${country.name.common}</h1>
            <h3>Capital : ${country.capital}</h3>
            <img src="${country.flags.png}" alt=""> </br>
            <button onclick="countryDetails('${country.cca2}')">Country Details</button>
        `;
        countryDiv.appendChild(creatDiv);
    }
}



countryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
} 

displayCountryDetails = countryData => {
    const countryDetails = document.getElementById('countryDetails');
        countryDetails.innerHTML = `
            <h2>Details: ${countryData.name.common}</h2>
            <img src="${countryData.flags.png}">
        `;
}

loadCountry()