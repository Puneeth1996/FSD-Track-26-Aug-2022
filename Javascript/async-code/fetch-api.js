
var url = "https://api.publicapis.org/entries";

var apiData;
var featchAPI = fetch(url).then(function(response) {
    return(response.json());
}).then( function(data) {
    apiData = data;
    console.log(apiData);
    return(apiData);
});

console.log(apiData);

var sum = 10 + 20;
console.log(sum);



