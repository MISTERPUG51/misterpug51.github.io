alert("I am currently working on completely rebuilding my website as of 9/24/26. This will take a while, maybe weeks, maybe months. You can still view most of my projects on my github profile page.");


//fetch website header and put it in the headerdiv
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("headerdiv").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "/headercontent.html", true);
xhttp.send();


//fetch website footer and put it in the footerdiv
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("footerdiv").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "/footercontent.html", true);
xhttp.send();