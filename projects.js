async function getProjects() {
    const path = "projects.json"
    const seasonContent = await fetch(path);
    return seasonContent.json();
}

async function displayProjects(){
    const data = await getProjects();
    data.forEach(res => {
        const card = document.createElement("div");
        card.className="card rounded my-5 " + res.colour;
        card.innerHTML =
        `
        <div class="row mx-1 mx-md-5">
            <h1 class="mt-5 d-flex justify-content-center"><u>${res.title}</u></h1>
            <div class="col-md-6">
              <p class="mt-4">${res.description}</p>
              ${res.list}
            </div>
            <div class="col-md-6 mt-4">
              <img
                src="${res.thumbnail}"
                alt="${res.alt}"
                class="img-fluid"
                width="1200"
              />
            </div>
            <a class="my-4 d-flex justify-content-center" href="${res.link}" target="_">
              <button type="button" class="btn btn-primary"> View Code</button>
            </a>
          </div>
        `
        const container = document.getElementById("container");
        container.appendChild(card);
    });
    displayDetailsList();
}


function displayDetailsList(){
    const container = document.getElementById("project-details-container");
    const list = document.createElement("ul");
    list.className="mt-2";
    list.innerHTML =
    `
    <li class="my-2"> A number of digital weather stations controlled by microcomputers </li>
    <li class="my-2"> A connected weather stations (e.g. temperature, barometric pressure, relative humidity, wind force, etc.) at the user’s request through a GUI </li>
    <li class="my-2"> A central server machine that provides (also via a GUI): </li>
    <ul>
    <li class="my-2"> Services for new weather stations to connect automatically on powerup and upload its data. </li>
    <li class="my-2"> Services for new workstations to connect on log in (regulated by a user database), and, after successful connection, obtain an
        up-to-date description of the field and a list of connected weather stations, and download their respective data on request. </li>
    </ul>
    `
    container.appendChild(list);
}