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
    let number = prompt("Enter the number of squares for the new grid.");
    
    /*if (number == null || number <= 0) {
        let number = prompt("Enter the number of squares for the new grid.");
    }*/
});