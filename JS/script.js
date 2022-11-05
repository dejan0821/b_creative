// navbar
function toggleButton() {
    var navList = document.getElementById("nav-list");
    if (navList.style.display === "block") {
        navList.style.display = "none";
      } 
      else {
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
return true 
}
}


// PORTFOLIO

function logoWork(x) {
  var portfolioAll = document.getElementById("portfolio-all");
  var portfolioLogo = document.getElementById("portfolio-logo");
  var portfolioWeb = document.getElementById("portfolio-web");
  var portfolioDevelopment = document.getElementById("portfolio-development");
  if(x){
    portfolioLogo.style.display = "flex";
    portfolioAll.style.display = "none";
    portfolioWeb.style.display = "none";
    portfolioDevelopment.style.display = "none";
     
}
}

function allWork(y) {
  var portfolioAll = document.getElementById("portfolio-all");
  var portfolioLogo = document.getElementById("portfolio-logo");
  var portfolioWeb = document.getElementById("portfolio-web");
  var portfolioDevelopment = document.getElementById("portfolio-development");
  if(y){
    portfolioLogo.style.display = "none";
    portfolioAll.style.display = "flex";
    portfolioWeb.style.display = "none";
    portfolioDevelopment.style.display = "none";
}
 }

 function webWork(z) {
  var portfolioAll = document.getElementById("portfolio-all");
  var portfolioLogo = document.getElementById("portfolio-logo");
  var portfolioWeb = document.getElementById("portfolio-web");
  var portfolioDevelopment = document.getElementById("portfolio-development");
  if(z){
    portfolioLogo.style.display = "none";
    portfolioAll.style.display = "none";
    portfolioWeb.style.display = "flex";
    portfolioDevelopment.style.display = "none";
}
 }

 function developmentWork(n) {
  var portfolioAll = document.getElementById("portfolio-all");
  var portfolioLogo = document.getElementById("portfolio-logo");
  var portfolioWeb = document.getElementById("portfolio-web");
  var portfolioDevelopment = document.getElementById("portfolio-development");
  if(n){
    portfolioLogo.style.display = "none";
    portfolioAll.style.display = "none";
    portfolioWeb.style.display = "none";
    portfolioDevelopment.style.display = "flex";
 }
}



  