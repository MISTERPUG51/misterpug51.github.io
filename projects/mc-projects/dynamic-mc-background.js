const currentDate = new Date();
let hour = currentDate.getHours();
if (hour < 7) {
    document.body.style.backgroundImage = "url('/images/mcbackground_night.jpg')";
}
if (hour > 18) {
    document.body.style.backgroundImage = "url('/images/mcbackground_night.jpg')";
}