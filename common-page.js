var navbarHttpRequest = new XMLHttpRequest();
navbarHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("navbardiv").innerHTML = navbarHttpRequest.responseText;
    }
};
navbarHttpRequest.open("GET", "/navbar.html", true);
navbarHttpRequest.send();