// JavaScript source code

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
}