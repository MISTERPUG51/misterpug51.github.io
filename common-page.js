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

alert("This website is under construction. You can still browse, but many pages and features may be broken or missing.");