//elements
const blik_object = document.getElementsByClassName("blik")[0];


//variables
const valClass = "blik-val";

//events

blik_object.addEventListener("click", function() {
    toggleFall(blik_object, valClass);
})

//functions
function toggleFall(element, className) {
    if (!element.classList.contains(className)) {
        console.log("Class added");
        element.classList.add(className);
    }
}
