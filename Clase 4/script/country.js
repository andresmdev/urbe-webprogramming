async function getCountryData() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');

  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
  const country = response.data[0];

  document.getElementById('name').innerHTML = country.name.common;
  document.getElementById('flag').src = country.flags.png;
  document.getElementById('capital').innerHTML = (country.capital == "Caracas") ? "Maracaibo" : country.capital;

  const borders_data = country.borders;

  let borders = '';

  if (borders_data) {
    for(let b of borders_data) {
      borders += `<li>${b}</li>`;
    }
  }
  else {
    borders = '<li>No tiene fronteras</li>';
  }

  document.getElementById('borders').innerHTML = borders;
}

