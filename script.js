document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    let searchInput = event.target.value.toLowerCase();

    const namesArr = document.getElementsByClassName("name");

    for (let i = 0; i < namesArr.length; i++) {
      let currentName = namesArr[i].textContent.toLowerCase();

      if (currentName.includes(searchInput)) {
        namesArr[i].style.display = "block";
      } else {
        namesArr[i].style.display = "none";
      }
    }
  });
