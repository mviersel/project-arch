

const dropupArrow = document.getElementById("dropup-arrow")
dropupArrow.addEventListener("click", function PopupMenuClassCheck(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
    else if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
})
