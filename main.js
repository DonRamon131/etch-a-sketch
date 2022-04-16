let main_div = document.getElementById('mainDiv');

for (let i = 0; i <16; i++) {
    for (let j = 0; j < 15; j++) {
        main_div.innerHTML += "<div>+</div>";
        }
    main_div.innerHTML += "<div>*</div>";
}