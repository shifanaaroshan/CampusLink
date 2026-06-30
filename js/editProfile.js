const user = JSON.parse(localStorage.getItem("loggedInUser"));

if(user){

document.getElementById("editName").value=user.fullName;

document.getElementById("editEmail").value=user.email;

document.getElementById("editDepartment").value=user.programme || user.facultyDepartment;

}

document.getElementById("editProfileForm").onsubmit=function(e){

e.preventDefault();

user.fullName=document.getElementById("editName").value;

user.email=document.getElementById("editEmail").value;

if(user.role==="Student"){

user.programme=document.getElementById("editDepartment").value;

}else{

user.facultyDepartment=document.getElementById("editDepartment").value;

}

localStorage.setItem("loggedInUser",JSON.stringify(user));

localStorage.setItem("campusLinkUser",JSON.stringify(user));

alert("Profile Updated Successfully!");

window.location.href="profile.html";

};