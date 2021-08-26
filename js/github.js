function getUser() {
  fetch(`https://api.github.com/users`)
    .then((resp) => resp.json())
    .then((data) => showUser(data));
}

getUser();
function showUser(data) {
  const container = document.getElementById("user-container");
  for (let info of data) {
    const mainDiv = document.createElement("div");
    const flexDiv = document.createElement("div");
    mainDiv.classList.add("col-md-4");
    flexDiv.classList.add(
      "d-flex",
      "align-items-center",
      "p-3",
      "shadow",
      "rounded-3"
    );

    flexDiv.innerHTML = `
      <div> 
          <img src=${info.avatar_url} class="avatar"/>             
      </div>
      <div class="ps-3"> 
      <h4> ${info.login} </h4>
      <a href=${info.html_url} class="text-primary" /> Github link </a>
      </div>
      `;

    mainDiv.appendChild(flexDiv);
    container.appendChild(mainDiv);
  }
}
