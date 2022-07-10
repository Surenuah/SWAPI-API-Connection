const urls = {
    base: "https://swapi.dev/api/",
    people: "people/",
    planets: 'planets/',
    films: 'films/',
    species: 'species/',
    vehicles: 'vehicles/',
    starships: 'starships/',
};

const apiItemsNavbar = document.querySelector(".api-items__navbar");

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
    console.log(data);

    document.querySelector(".overlay").classList.remove("active");

    main.innerHTML = data.results
        .map((item) => {
            let itemName = item.name || item.title;
            return `<p>${itemName}</p>`;
        })
        .join(" ");
};

apiItemsNavbar.addEventListener("click", getData);