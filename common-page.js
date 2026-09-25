var navbarHttpRequest = new XMLHttpRequest();
navbarHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("navbardiv").innerHTML = navbarHttpRequest.responseText;
    }
};

var footerHttpRequest = new XMLHttpRequest();
footerHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("footer").innerHTML += footerHttpRequest.responseText;
    }
};


navbarHttpRequest.open("GET", "/navbar.html", true);
navbarHttpRequest.send();
footerHttpRequest.open("GET", "/footer.html", true);
footerHttpRequest.send();

alert("I am currently working on completely rebuilding my website as of 9/24/26. This will take a while, maybe weeks, maybe months. You can still view most of my projects on my github profile page.");


//This is used for when Programs is clicked on the navigation bar.
function programsButtonClicked() {
    window.location.href="/programs";
}