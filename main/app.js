const urls = {
    base: "https://swapi.dev/api/",
    people: "people/",
    planets: "planets/",
    films: "films/",
    species: "species/",
    vehicles: "vehicles/",
    starships: "starships/",
};

const params = new URLSearchParams(window.location.search);
const apiItemsNavbar = document.querySelector(".api-items__navbar");

document.addEventListener("DOMContentLoaded", () => {
    fetchResources(params);
});

function createLinks() {
    let df = new DocumentFragment();
    for (let url in urls) {
        if (url !== "base") {
            let link = document.createElement("a");
            link.href = `${urls.base}${urls[url]}`;
            link.textContent = url;
            link.setAttribute("link", `${urls.base}${urls[url]}`);
            df.append(link);
        }
    }
    apiItemsNavbar.append(df);
}

createLinks();

async function getData(e) {
    if (e) e.preventDefault();

    document.querySelector(".overlay").classList.add("active");

    let link = e.target;
    let url = link.getAttribute("link");

    await fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        })
        .then(buildList)
        .catch((err) => {
            console.log(err);
            document.querySelector(".overlay").classList.remove("active");
        });
}

const buildList = (data) => {
    const main = document.querySelector(".api-items__main");

    document.querySelector(".overlay").classList.remove("active");

    data.results
        .map((item) => {
            let link = document.createElement('a');
            link.setAttribute("id", `${item.url.split("/")[5]}`);
            link.setAttribute("resource", `${item.url.split("/")[4]}`)
            link.innerHTML = item.name || item.title;
            link.addEventListener("click", (e) => {
                window.location.href = "resources.html";
                queryParameters(e.target.id, link.getAttribute("resource"));
            });
            main.appendChild(link);
        })
        .join(" ");
};

function queryParameters(id, resource) {
    const url = new URL(`https://swapi.dev/api/${resource}/${id}/`);
    const resourcePathname = url.pathname.split("/")[2];2
    const idPathname = url.pathname.split("/")[3];

    params.set("resource", `${resourcePathname}`);
    params.set("id", `${idPathname}`);
    window.history.pushState("string", "resource", `${"?" + params}`);

    fetchResources(params);
}

async function fetchResources(params) {
    const person = document.querySelector(".person");
    if (params.has("id")) {
        await fetch(`https://swapi.dev/api/${params.get("resource")}/${params.get("id")}/`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let p = document.createElement("p");
                p.innerHTML = JSON.stringify(data);
                person.appendChild(p);
            })
    }
}

apiItemsNavbar.addEventListener("click", getData);