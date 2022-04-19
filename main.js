let main_div = document.getElementById('mainDiv');

for (let i = 0; i <256; i++) {
    main_div.innerHTML += "<div class=dividio> </div>";
}

/*let collection = document.getElementsByClassName("dividio");*/

main_div.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = "black";
});