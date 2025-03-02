var CraftMineAPIHttpRequest = new XMLHttpRequest();
CraftMineAPIHttpRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const CraftMineJSON = JSON.parse(CraftMineAPIHttpRequest.responseText);
        document.getElementById("LatestProjectTable").innerHTML = CraftMineJSON.description;
    }
};
CraftMineAPIHttpRequest.open("GET", "https://api.github.com/repos/MISTERPUG51/CraftMine", true);
CraftMineAPIHttpRequest.send();