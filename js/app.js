const XOElements = [document.querySelector(".fa-xmark"), document.querySelector(".fa-o")];

XOElements.forEach(element => {
    element.addEventListener("mouseover", event => {
        event.target.classList.add("fa-beat");
    })
    element.addEventListener("mouseout", event => {
        event.target.classList.remove("fa-beat");
    })
})