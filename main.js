/*BLock that creates the initial grid of 16x16 */
let main_div = document.getElementById('mainDiv');
for (let i = 0; i <256; i++) {
    main_div.innerHTML += "<div class=dividio> </div>";
}
/* Block that creates an eventListener for everyh div*/
function func() {
let div_s = document.querySelectorAll(".dividio");
div_s.forEach(div => {
    div.addEventListener('mouseover', e => {
        div.setAttribute('style', "background-color: black;"); /*or e.target.style.backgroundColor = "black";*/
    })
});
};

/*Block that creates a button to reset every div */
function func2() {
let butto_n = document.getElementById('boton');
let div_s = document.querySelectorAll(".dividio");
butto_n.addEventListener('click', e => {
    div_s.forEach(div => {
        div.setAttribute('style', "background-color: rgba(255, 255, 255, 0.8);")
    })
});
};
func();
func2();

/*Block that creates a button that prompts the user for a new size for the grid */
let button_n2 = document.getElementById("boton2");
button_n2.addEventListener('click', e => {
    let number = prompt("Enter the number you wish for the new grid.")
    if (number === null || number == "") {return;}
    let numberDoubled = number * number;
    main_div.innerHTML="";
    for (let i = 0; i <numberDoubled; i++) {
        main_div.innerHTML += "<div class=dividio> </div>";
    }
    main_div.setAttribute('style', `grid-template-rows: repeat(${number}, 1fr); grid-template-columns: repeat(${number}, 1fr)`);
    /* or
    main_div.style.gridTemplateRows = `repeat(${number}, 1fr)`; */
    
    let div_s = document.querySelectorAll(".dividio");
    func();
    let butto_n = document.getElementById('boton');
    func2();
});