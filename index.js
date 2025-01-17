const scrollTop = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const menuBar = document.getElementById("toggleMenu");
const navMenu = document.getElementById("navMenu");
const search = document.getElementById("search");
menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  search.style.toggle("show");
});
function signUp() {

  const userName = document.getElementById("signupUname").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPass").value;

  const userData = { userName, email, password };
  localStorage.setItem("user", JSON.stringify(userData));
  if (userData) {
    window.alert("Sign Up Successful")
    location.href = "signin.html"
  } else {
    alert("Login failed");
  }
}

function login() {
  const userName = document.getElementById("loginUname").value;
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.userName === userName &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    alert("LOGIN SUCCESSFUL");
    location.href = "dashboard.html"
  } else {
    document.getElementById("error").textContent =
      "Fill in your details correctly";
  }
}

function bookAppointment(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
//   const fullName = firstName + "" + lastName;
  const bookingEmail = document.getElementById("bookingEmail").value;
  const phoneInput = document.getElementById("phoneInput").value;
  const date = document.getElementById("date").value;
  const reason = document.getElementById("reason").value;

  const allBookingInfo = { firstName, lastName, bookingEmail, phoneInput, date, reason };

  localStorage.setItem("bookInfo", JSON.stringify(allBookingInfo));
  // localStorage.setItem("bookInfo", JSON.stringify(allBookingInfo))
  console.log(localStorage.getItem(parse("allBookingInfo")));
}