//fetch website header and put it in the headerdiv
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("headerdiv").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "/common-resources/headercontent.html", true);
xhttp.send();


//fetch website footer and put it in the footerdiv
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("footerdiv").innerHTML = xhttp2.responseText;
    }
};
xhttp2.open("GET", "/common-resources/footercontent.html", true);
xhttp2.send();