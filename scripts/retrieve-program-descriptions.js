var StickyAPIHttpRequest = new XMLHttpRequest();
StickyAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const StickyJSON = JSON.parse(StickyAPIHttpRequest.responseText);
        document.getElementById("StickyDescription").innerHTML = StickyJSON.description;
    }
};
StickyAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/Sticky", true);
StickyAPIHttpRequest.send();


var PSXControllerTestAPIHttpRequest = new XMLHttpRequest();
PSXControllerTestAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const PSXControllerTestJSON = JSON.parse(PSXControllerTestAPIHttpRequest.responseText);
        document.getElementById("PSXControllerTestDescription").innerHTML = PSXControllerTestJSON.description;
    }
};
PSXControllerTestAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/PSXControllerTest", true);
PSXControllerTestAPIHttpRequest.send();

var CrASHSDKHelperAPIHttpRequest = new XMLHttpRequest();
CrASHSDKHelperAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const CrASHSDKHelperJSON = JSON.parse(CrASHSDKHelperAPIHttpRequest.responseText);
        document.getElementById("CrASHSDKHelperDescription").innerHTML = CrASHSDKHelperJSON.description;
    }
};
CrASHSDKHelperAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/CrASHSDKHelper", true);
CrASHSDKHelperAPIHttpRequest.send();