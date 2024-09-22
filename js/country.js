const loadcountries = () =>{
  const url = 'https://restcountries.com/v3.1/all';
  fetch(url)
  .then(res => res.json())
  .then(post => displaycountries(post))
}


const displaycountries = post =>{
  const allCountries = document.getElementById('all-countries');
  
  post.forEach(country =>{
    //console.log(country);

    const countrycontainer = document.createElement('div');
    countrycontainer.classList.add('country');
    countrycontainer.innerHTML =`
    
    <h3>name= ${country.name.common}</h3>
    <h3>capital= ${country.capital ? country.capital[0] : 'no-capital'}</h3>
    <button onclick="loadcountrydetail('${country.cca2}')">detail</button>
    
    `;
    allCountries.appendChild(countrycontainer);

  })
}

const loadcountrydetail = code =>{
  const url = `https://restcountries.com/v3.1/alpha/${code}`
  //console.log(code);
  fetch(url)
  .then(res => res.json())
  .then(data => showcountrydetails(data[0]))
}

const showcountrydetails = country =>{
  console.log(country);
  const countryDetails = document.getElementById('country-details');
  countryDetails.innerHTML =`
  
  <h3>Name= ${country.name.common}</h3>
  <img src="${country.flags.png}" >
  
  
  `
}

loadcountries();