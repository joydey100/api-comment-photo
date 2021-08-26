function getPhoto() {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((resp) => resp.json())
    .then((data) => showPhoto(data));
}

getPhoto();
function showPhoto(data) {
  const container = document.getElementById("photo-container");
  for (let info of data) {
    console.log(info);
    const mainDiv = document.createElement("div");
    const flexDiv = document.createElement("div");
    mainDiv.classList.add("col-md-4");
    flexDiv.classList.add("d-flex", "align-items-center", "shadow");

    flexDiv.innerHTML = `
    <div> 
        <img src=${info.thumbnailUrl}/>        
    </div>
    <div class="px-3"> 
    <h4> ${info.id} </h4>
    <p> ${info.title} </p>
    </div>
    `;

    mainDiv.appendChild(flexDiv);
    container.appendChild(mainDiv);
  }
}
