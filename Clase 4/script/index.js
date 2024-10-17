function retrieveData() {

  axios.get('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // handle success
    console.log(response.data);

    let output = "";
    const countries = response.data;

    for(c of countries) {
      output += `<tr>
        <td>
          <img src="${c.flags.png}" alt="${c.name.common}" width="50">
        </td>
        <td>${c.name.common}</td>
        <td>${c.idd.root}</td>
        <td>${c.tld}</td>
        <td>${c.region}</td>
        <td>
          <a href="./country.html?code=${c.cca2}">Ver mas</a>
        </td>
      </tr>`
    }

    document.getElementById('tbody').innerHTML = output;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

} 