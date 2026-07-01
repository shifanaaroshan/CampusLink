const profileUpload =
document.getElementById(
"profileUpload"
);

const profileImage =
document.getElementById(
"profileImage"
);

if(profileUpload){

profileUpload.addEventListener(
"change",
function(){

const file =
this.files[0];

if(file){

const reader =
new FileReader();

reader.onload =
function(e){

profileImage.src =
e.target.result;

localStorage.setItem(
"profileImage",
e.target.result
);

};

reader.readAsDataURL(file);

}

});

}

window.addEventListener(
"load",
function(){

const savedImage =
localStorage.getItem(
"profileImage"
);

if(savedImage){

profileImage.src =
savedImage;

}

});
