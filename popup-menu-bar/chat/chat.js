const clickElement = document.getElementById("btnPress");
const changeElement = document.getElementById("myElement");
const rood = "rood";
const blauw = "blauw";

clickElement.addEventListener("click", function(){
    toggleClass(changeElement, rood);
});


function toggleClass (element, showClass) {
    if (element.classList.contains(showClass)) {
        console.log("class removed");
        // If the class exists, remove it
        element.classList.remove(showClass);
    } else {
        // If the class doesn't exist, add it
        console.log("class added");
        element.classList.add(showClass);
    }
}
