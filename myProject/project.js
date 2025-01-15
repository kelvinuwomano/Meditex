const scrollTop = document.getElementById("scrollToTop")
window.addEventListener("scroll",() =>{
    if (window.scrollY > 400) {
        scrollTop.style.display = "block"
    } else {
        scrollTop.style.display = "none"
    }
})
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

const menuBar = document.getElementById("toggleMenu")
const navMenu = document.getElementById("navMenu")
menuBar.addEventListener("click", () =>{
    navMenu.classList.toggle("show")
})
