const params = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", (e) => {
    fetchResources(params);
});

async function fetchResources(params) {
    const resources = document.querySelector(".resources");
    if (params.has("resource") && params.has("id")) {
        await fetch(`https://swapi.dev/api/${params.get("resource")}/${params.get("id")}/`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let p = document.createElement("p");
                p.innerHTML = JSON.stringify(data);
                resources.appendChild(p);
            })
    }
}