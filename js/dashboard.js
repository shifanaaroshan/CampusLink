
// ===========================================
// CAMPUS LINK - DASHBOARD
// ===========================================

// Get logged in user
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// If user is not logged in
if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// Display user name
const userName = document.getElementById("userName");

if (userName && loggedInUser) {

    userName.textContent = `Hello, ${loggedInUser.fullName}`;

}

// Search Box (Prototype Ready)
const searchInput = document.querySelector(".search-section input");

if (searchInput) {

    searchInput.addEventListener("focus", function () {

        console.log("Search Clicked");

    });

}

// Quick Access Cards
const quickCards = document.querySelectorAll(".quick-card");

quickCards.forEach(function(card){

    card.addEventListener("click", function(){

        const title = card.innerText;

        alert(title + " feature will be connected soon.");

    });

});

// Bottom Navigation Highlight
const navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

