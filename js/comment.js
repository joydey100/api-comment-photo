function getComment() {
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((resp) => resp.json())
    .then((data) => showComment(data));
}
getComment();

function showComment(data) {
  const container = document.getElementById("comment-container");
  for (let info of data) {
    let div = document.createElement("div");
    div.classList.add("col-md-4");

    div.innerHTML = `
    <div class="p-4 shadow">
    
    <p> ${info.id}.  ${info.body}</p>
    <small class="text-secondary"> ${info.email} </small>
    </div>
    `;

    container.appendChild(div);
  }
}
