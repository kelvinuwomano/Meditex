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
const search = document.getElementById('search')
menuBar.addEventListener("click", () => {
    navMenu.classList.toggle("show")
    search.style.toggle('show')
    
})
function signUp() {
    
const userName = document.getElementById("signupUname").value;
const email = document.getElementById("signupEmail").value;
const password = document.getElementById("signupPass").value;

const userData = { userName, email, password};
localStorage.setItem("user", JSON.stringify(userData))

}

function login() {
    const userName = document.getElementById("loginUname").value;
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.userName === userName && storedUser.email === email && storedUser.password === password) {
        alert("LOGIN SUCCESSFUL")
    } else {
        document.getElementById("error").textContent = "Fill in your details correctly"
    }
}