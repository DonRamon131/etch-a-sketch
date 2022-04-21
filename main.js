let main_div = document.getElementById('mainDiv');

for (let i = 0; i <256; i++) {
    main_div.innerHTML += "<div class=dividio> </div>";
}

let div_s = document.querySelectorAll(".dividio");

div_s.forEach(div => {
    div.addEventListener('mouseover', function(event) {
        div.setAttribute('style', "background-color: black;"); /*or event.target.style.backgroundColor = "black";*/
    })
});

let butto_n = document.getElementById('boton');

butto_n.addEventListener('click', e => {
    div_s.forEach(div => {
        div.setAttribute('style', "background-color: rgba(255, 255, 255, 0.8);")
    })
});

let button_n2 = document.getElementById("boton2");

button_n2.addEventListener('click', e => {
    let number = prompt("Enter the number you wish for the new grid.")

    for (let i = 0; i <number; i++) {
        main_div.innerHTML += "<div class=dividio> </div>";
    }

    main_div.setAttribute('style', `grid-template-columns: repeat(${number}, auto);`)
    main_div.setAttribute('style', `grid-template-rows: repeat(${number}, auto);`)
});