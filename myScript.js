const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let button = document.querySelector("#btn");
let color = document.querySelector(".color");
button.addEventListener("click", function () {
    let hexa = "#";
    for(i=0 ; i<6 ; i++){
        hexa += hex[Math.floor(Math.random() * hex.length)];
        console.log(hexa);
    }
    color.textContent = hexa;
    document.body.style.backgroundColor = hexa;
})
