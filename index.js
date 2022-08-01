setInterval(setClock, 1000);
const hourHand = document.querySelector("[data-hour-hand]");
const minutHand = document.querySelector("[data-minut-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutsRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const HoursRatio = (minutsRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minutHand, minutsRatio);
    setRotation(hourHand, HoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}
setClock();