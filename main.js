let main_div = document.getElementById('mainDiv');

for (let i = 0; i <256; i++) {
    main_div.innerHTML += "<div class=dividio> </div>";
}

let div_s = document.querySelectorAll(".dividio");

div_s.forEach(div => {
    div.addEventListener('mouseover', function(event) {
        div.setAttribute('style', "background-color: black;");
    })
});