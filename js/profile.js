// ======================================
// CAMPUS LINK - PROFILE
// ======================================

// Get Logged In User
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// Check Login
if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// Profile Name
const profileName = document.getElementById("profileName");

if(profileName){

    profileName.textContent = loggedInUser.fullName || "-";

}

// Role
const profileRole = document.getElementById("profileRole");

if(profileRole){

    profileRole.textContent = loggedInUser.role || "-";

}

// Register Number
const registerNumber = document.getElementById("registerNumber");

if(registerNumber){

    registerNumber.textContent = loggedInUser.registerNumber || "-";

}

// Email
const email = document.getElementById("email");

if(email){

    email.textContent = loggedInUser.email || "-";

}

// Programme / Department
const programme = document.getElementById("programme");

if(programme){

    if(loggedInUser.role === "Faculty"){

        programme.textContent =
        loggedInUser.department || "-";

    }else{

        programme.textContent =
        loggedInUser.programme || "-";

    }

}

// Academic Year / Designation
const year = document.getElementById("year");

if(year){

    if(loggedInUser.role === "Faculty"){

        year.textContent =
        loggedInUser.designation || "-";

    }else{

        year.textContent =
        loggedInUser.year || "-";

    }

}

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click", function(){

        localStorage.removeItem("loggedInUser");

        window.location.href = "login.html";

    });

}