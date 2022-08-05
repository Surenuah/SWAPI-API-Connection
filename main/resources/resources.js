const params = new URLSearchParams(window.location.search);

// Adding DOMContentLoaded event to re-request after page refresh
document.addEventListener("DOMContentLoaded", () => {
    fetchResources(params);
});

const resources = document.getElementById("resources");

// Query by query parameters, and categorization
async function fetchResources(params) {
    await fetch(`https://swapi.dev/api/${params.get("resource")}/${params.get("id")}/`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if (params.get("resource") === "people") {
                people(data);
            } else if (params.get("resource") === "planets") {
                planets(data);
            } else if (params.get("resource") === "films") {
                films(data);
            } else if (params.get("resource") === "species") {
                species(data);
            } else if (params.get("resource") === "vehicles") {
                vehicles(data);
            } else if (params.get("resource") === "starships") {
                starships(data);
            }
        })
}

// Creating output cards for each category
function people(data) {
    resources.innerHTML = `<div class="resources">
<p>Name: <span>${data.name}</span></p>
<p>Height: <span>${data.height}</span></p>
<p>Mass: <span>${data.mass}</span></p>
<p>Hair Color: <span>${data.hair_color}</span></p>
<p>Skin Color: <span>${data.skin_color}</span></p>
<p>Eye Color: <span>${data.eye_color}</span></p>
<p>Birth Year: <span>${data.birth_year}</span></p>
<p>Gender: <span>${data.gender}</span></p>
</div>`
}

function planets(data) {
    resources.innerHTML = `<div class="resources">
<p>Name: <span>${data.name}</span></p>
<p>Climate: <span>${data.climate}</span></p>
<p>Diameter: <span>${data.diameter}</span></p>
<p>Gravity: <span>${data.gravity}</span></p>
<p>Orbital Period: <span>${data.orbital_period}</span></p>
<p>Population: <span>${data.population}</span></p>
<p>Rotation Period: <span>${data.rotation_period}</span></p>
<p>Terrain: <span>${data.terrain}</span></p>
</div>`
}

function films(data) {
    resources.innerHTML = `<div class="resources">
<p>Director: <span>${data.director}</span></p>
<p>Episode: <span>${data.episode_id}</span></p>
<p>Producer: <span>${data.producer}</span></p>
<p>Title: <span>${data.title}</span></p>
</div>`
}

function species(data) {
    resources.innerHTML = `<div class="resources">
<p>Name: <span>${data.name}</span></p>
<p>Average Height: <span>${data.average_height}</span></p>
<p>Average Lifespan: <span>${data.average_lifespan}</span></p>
<p>Classification: <span>${data.classification}</span></p>
<p>Eye Colors: <span>${data.eye_colors}</span></p>
<p>Hair Colors: <span>${data.hair_colors}</span></p>
<p>Language: <span>${data.language}</span></p>
<p>Skin Colors: <span>${data.skin_colors}</span></p>
</div>`
}

function vehicles(data) {
    resources.innerHTML = `<div class="resources">
<p>Name: <span>${data.name}</span></p>
<p>Cargo Capacity: <span>${data.cargo_capacity}</span></p>
<p>Consumables: <span>${data.consumables}</span></p>
<p>Cost in credits: <span>${data.cost_in_credits}</span></p>
<p>Length: <span>${data.length}</span></p>
<p>Max Atmoshering Speed: <span>${data.max_atmosphering_speed}</span></p>
<p>Model: <span>${data.model}</span></p>
<p>Passengers: <span>${data.passengers}</span></p>
<p>Vehicle Class: <span>${data.vehicle_class}</span></p>
</div>`
}

function starships(data) {
    resources.innerHTML = `<div class="resources">
<p>Name: <span>${data.name}</span></p>
<p>MGLT: <span>${data.MGLT}</span></p>
<p>Cargo Capacity: <span>${data.cargo_capacity}</span></p>
<p>Consumables: <span>${data.consumables}</span></p>
<p>Cost in credits: <span>${data.cost_in_credits}</span></p>
<p>Crew: <span>${data.crew}</span></p>
<p>Hyperdrive Rating: <span>${data.hyperdrive_rating}</span></p>
<p>Length: <span>${data.length}</span></p>
<p>Manufacturer: <span>${data.manufacturer}</span></p>
<p>Max Atmoshering Speed: <span>${data.max_atmosphering_speed}</span></p>
<p>Model: <span>${data.model}</span></p>
<p>Passengers: <span>${data.passengers}</span></p>
<p>Starhips Class: <span>${data.starship_class}</span></p>
</div>`
}