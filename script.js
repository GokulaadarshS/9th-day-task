//Q.1 Get all the countries from Asia continent /region using Filter function

let countries;
fetch("https://restcountries.eu/rest/v2/all")
.then(res=>res.json())
.then(data=>initialize(data))
.catch(err=>console.log("Error:",err));
function initialize(countriesData){
  countries = countriesData;
  var Asiacountries = countries.filter(function(countries){
      return countries.region == "Asia"
  });
  console.log(Asiacountries);
}
  

  


// let countries;
// fetch("https://restcountries.eu/rest/v2/all")
// .then(res=>res.json())
// .then(data=>initialize(data))
// .catch(err=>console.log("Error:",err));
// function initialize(countriesData){
//   countries = countriesData;
//  countries.forEach(function(countries){
//   console.log(countries.name)
//   console.log(countries.capital)
//    console.log(countries.flag)
// });
// }



// let countries;
// fetch("https://restcountries.eu/rest/v2/all")
// .then(res=>res.json())
// .then(data=>initialize(data))
// .catch(err=>console.log("Error:",err));
// function initialize(countriesData){
//   countries = countriesData;
// countries.forEach(function(countries){
//     let a = countries.population
//   });
//   let sum = a.reduce((x, y) => x + y);
// console.log(sum);
// }

// let countries;
// fetch("https://restcountries.eu/rest/v2/all")
// .then(res=>res.json())
// .then(data=>initialize(data))
// .catch(err=>console.log("Error:",err));
// function initialize(countriesData){
//   countries = countriesData;
//  countries.forEach(function(countries){
//   console.log(countries.currencies.filter(c=>c.symbol="$"))
//   });
// }



