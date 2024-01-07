const clickElement = document.getElementById("btnPress");
clickElement.addEventListener("click", toggleClass);

showClass = "rood";

const toggleClass = function (element) {
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
