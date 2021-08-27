
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = (countries) => {
    
    countries.forEach(country => {
        // console.log(country)
        const countriesDiv = document.getElementById('countries')
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryBName('${country.name}')">Details</button>`
        
        countriesDiv.appendChild(div);
    })
}
const loadCountryBName = (name) =>{
    const url =`
    https://restcountries.eu/rest/v2/name/${name}` 
   
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = (country) =>{

    console.log(country)
    const countryDivs = document.getElementById('country-detail')
    countryDivs.innerHTML = `
    <h2> Name : ${country.name}</h2>
    <p> population : ${country.population}</p>
    <p> Region : ${country.region}</p>
    <img width="300px" src="${country.flag}">
    `

}
















// const loadCountryBName = (name) =>{
//     const url = `https://restcountries.eu/rest/v2/name/${name}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayCountryDetail(data[0]))
// }
// const displayCountryDetail = country => {
//    const countruDiv = document.getElementById('country-detail');
//    countruDiv.innerHTML =`
//    <h5>${country.name}</h4>
//    <p> population: ${country.population}</p>
//     <img width="200px" src ="${country.flag}">
//    `
// 
