function loadSerachResults() {
  var xhttp = new XMLHttpRequest(),
    response;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
      //data = response.results;
      ul = document.createElement("ul");
      document.getElementById("movieList").appendChild(ul);

      response.forEach(function (item) {
        let li = document.createElement("li");
        ul.style.listStyle = "unset";
        ul.appendChild(li);
        li.innerHTML += item.email;
      });
    }
  };
  xhttp.open(
    "GET",
    "https://jsonplaceholder.typicode.com/comments"
    //"https://api.themoviedb.org/3/search/movie?api_key=851195eccb0eb072fa9f0724b9001de5&query=Jack+Reacher"
  );
  xhttp.send();
}
window.addEventListener("load", loadSerachResults);
var input = document.getElementById("myInput");
input.addEventListener("keyup", getSearchResults);

function getSearchResults() {
    query = document.getElementById("myInput").value.toUpperCase(),
    list = document.getElementsByTagName("li");
    console.log(query)

  for (let i = 0; i < list.length; i++) {
    let txtVal = list[i].innerHTML.toUpperCase();
    if (txtVal.indexOf(query) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }

  debugger;
}
