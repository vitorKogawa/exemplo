var hamb = document.getElementById("hamb")
var sidebar = document.getElementById("sidebar")
var hambItems = document.querySelectorAll("#hamb > div")
var aux = true;

function upX(element)
{
    element[0].classList.add("hamb1")
    element[1].classList.add("hamb2")
    element[2].classList.add("hamb3")
}

function downX(element)
{
    element[0].classList.remove("hamb1")
    element[1].classList.remove("hamb2")
    element[2].classList.remove("hamb3")
}

hamb.addEventListener("click", () => {
    if (aux) {
        sidebar.style.left = "0px";
        aux = false;
        upX(hambItems)
    } else {
        sidebar.style.left = "-100%";
        aux = true;
        downX(hambItems)
    }
})
