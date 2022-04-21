let main_div = document.getElementById('mainDiv');
for (let i = 0; i <256; i++) {
    main_div.innerHTML += "<div class=dividio> </div>";
}

let div_s = document.querySelectorAll(".dividio");
let butto_n = document.getElementById('boton');
butto_n.addEventListener('click', e => {
    div_s.forEach(div => {
        div.setAttribute('style', "background-color: rgba(255, 255, 255, 0.8);")
    })
});

let button_n2 = document.getElementById("boton2");
button_n2.addEventListener('click', e => {
    let number = prompt("Enter the number you wish for the new grid.")
    let numberDoubled = number * number;
    main_div.innerHTML="";
    for (let i = 0; i <numberDoubled; i++) {
        main_div.innerHTML += "<div class=dividio> </div>";
    }
    main_div.setAttribute('style', `grid-template-columns: repeat(${number}, 1fr);`)
    main_div.setAttribute('style', `grid-template-rows: repeat(${number}, 1fr);`)
});

div_s.forEach(div => {
    div.addEventListener('mouseover', e => {
        div.setAttribute('style', "background-color: black;"); /*or e.target.style.backgroundColor = "black";*/
    })
});