function getProjects() {
    const path = "projects.json"
    return fetch(path).then(function(response) {
        return response.json();
    });
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
}