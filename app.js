const request = "https://swapi.dev/api/people/1/";

fetch(request).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
});