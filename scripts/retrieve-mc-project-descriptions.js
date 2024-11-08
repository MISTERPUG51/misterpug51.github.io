var DyeableConcreteAPIHttpRequest = new XMLHttpRequest();
DyeableConcreteAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const DyeableConcreteJSON = JSON.parse(DyeableConcreteAPIHttpRequest.responseText);
        document.getElementById("DyeableConcreteDescription").innerHTML = DyeableConcreteJSON.description;
    }
};
DyeableConcreteAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/DyableConcrete", true);
DyeableConcreteAPIHttpRequest.send();


var CoalDyeAPIHttpRequest = new XMLHttpRequest();
CoalDyeAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const CoalDyeJSON = JSON.parse(CoalDyeAPIHttpRequest.responseText);
        document.getElementById("CoalDyeDescription").innerHTML = CoalDyeJSON.description;
    }
};
CoalDyeAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/CoalDye", true);
CoalDyeAPIHttpRequest.send();


var NoMoreOresAPIHttpRequest = new XMLHttpRequest();
NoMoreOresAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const NoMoreOresJSON = JSON.parse(NoMoreOresAPIHttpRequest.responseText);
        document.getElementById("NoMoreOresDescription").innerHTML = NoMoreOresJSON.description;
    }
};
NoMoreOresAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/NoMoreOres", true);
NoMoreOresAPIHttpRequest.send();