// navbar
function toggleButton() {
    var navList = document.getElementById("nav-list");
    if (navList.style.display === "block") {
        navList.style.display = "none";
      } else {
        navList.style.display = "block";
      }
    }

    function searchB(inputS) {
        var searchBox = document.getElementById("search-box");
        var searchIcon = document.getElementById("search-icon");
        var searchButton = document.getElementById("search-button");
    
    if(inputS){
      searchIcon.style.display = "none";
      searchBox.style.display = "inline-block";
      searchButton.style.display = "inline-block";    
  }
}

function goSearch() {
var goS = document.getElementById("search-box").value;
if(goS == "" || goS == null) { 
alert("Unesite pojam.");
return false
}
else { alert("Traženi pojam nije pronađen. Pokušajte ponovo.");
return true }
}

  