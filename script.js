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
  
//Q.2
//   let countries;
// fetch("https://restcountries.eu/rest/v2/all")
// .then(res=>res.json())
// .then(data=>initialize(data))
// .catch(err=>console.log("Error:",err));
// function initialize(countriesData){
//   countries = countriesData;
//   var population = countries.filter(function(countries){
//       return countries.population>200000
//   });
//   console.log(population);
// }
  

//Q.3
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


//Q.4
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

//Q.5
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



