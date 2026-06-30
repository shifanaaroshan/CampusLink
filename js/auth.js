// =====================================
// CAMPUS LINK AUTH.JS
// Version 2
// =====================================

// ==========================
// GET HTML ELEMENTS
// ==========================

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const role = document.getElementById("role");

const programmeLevel = document.getElementById("programmeLevel");
const programme = document.getElementById("programme");
const year = document.getElementById("year");

const facultyDepartment = document.getElementById("facultyDepartment");
const designation = document.getElementById("designation");

// ==========================
// SIGNUP
// ==========================

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();

        const registerNumber = document.getElementById("registerNumber").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;

        }

        const user = {

            fullName,

            registerNumber,

            email,

            role: role.value,

            programmeLevel: programmeLevel ? programmeLevel.value : "",

            programme: programme ? programme.value : "",

            year: year ? year.value : "",

            facultyDepartment: facultyDepartment ? facultyDepartment.value : "",

            designation: designation ? designation.value : "",

            password

        };

        localStorage.setItem("campusLinkUser", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}

// ==========================
// LOGIN
// ==========================

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();

        const savedUser = JSON.parse(localStorage.getItem("campusLinkUser"));

        if (!savedUser) {

            alert("No account found. Please sign up first.");

            return;

        }

        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(savedUser)
            );

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password.");

        }

    });

}
// ==========================
// LOAD PROGRAMMES & YEARS
// ==========================

if (programmeLevel) {

    programmeLevel.addEventListener("change", function () {

        // Clear existing options
        programme.innerHTML = '<option value="">Select Programme</option>';
        year.innerHTML = '<option value="">Academic Year</option>';

        const selectedLevel = programmeLevel.value;

        if (!selectedLevel) return;

        // Load Programmes
        collegeData.programmes[selectedLevel].forEach(function (course) {

            const option = document.createElement("option");

            option.value = course;
            option.textContent = course;

            programme.appendChild(option);

        });

        // Load Academic Years
        collegeData.years[selectedLevel].forEach(function (academicYear) {

            const option = document.createElement("option");

            option.value = academicYear;
            option.textContent = academicYear;

            year.appendChild(option);

        });

    });

}

// ==========================
// LOAD FACULTY DESIGNATIONS
// ==========================

if (designation) {

    designation.innerHTML = '<option value="">Select Designation</option>';

    collegeData.facultyDesignation.forEach(function (item) {

        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        designation.appendChild(option);

    });

}
// ==========================
// ROLE CHANGE
// ==========================

if (role) {

    role.addEventListener("change", function () {

        const studentFields = document.getElementById("studentFields");
        const facultyFields = document.getElementById("facultyFields");
        const registerNumber = document.getElementById("registerNumber");

        if (role.value === "Faculty") {

            if (studentFields) studentFields.style.display = "none";
            if (facultyFields) facultyFields.style.display = "block";

            registerNumber.placeholder = "Staff ID";

        } else {

            if (studentFields) studentFields.style.display = "block";
            if (facultyFields) facultyFields.style.display = "none";

            registerNumber.placeholder = "Register Number";

        }

    });

}

// ==========================
// CHECK LOGIN SESSION
// ==========================

function getLoggedInUser() {

    return JSON.parse(localStorage.getItem("loggedInUser"));

}

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

}
// ==========================
// LOAD PROFILE DATA
// ==========================

const profileName = document.getElementById("profileName");
const profileDepartment = document.getElementById("profileDepartment");

const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedUser) {

    if (profileName) {

        profileName.textContent = loggedUser.fullName;

    }

    if (profileDepartment) {

        if (loggedUser.role === "Student") {

            profileDepartment.textContent = loggedUser.programme;

        } else {

            profileDepartment.textContent = loggedUser.facultyDepartment;

        }

    }

}
