const toggleImage = () => {
    const image = document.getElementById("myLight")
    if (image.src.match("finalLightOff")) {
        image.src = "./assets/finalLightOn.png";
    } else {
        image.src = "./assets/finalLightOff.png";
    }
}