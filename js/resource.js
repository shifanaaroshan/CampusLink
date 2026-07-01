const downloadBtn =
document.getElementById(
"downloadBtn"
);

const saveBtn =
document.getElementById(
"saveBtn"
);

const shareBtn =
document.getElementById(
"shareBtn"
);

const commentBtn =
document.getElementById(
"commentBtn"
);

const commentInput =
document.getElementById(
"commentInput"
);

const commentsList =
document.getElementById(
"commentsList"
);

downloadBtn.addEventListener(
"click",
function(){

alert(
"Resource downloaded successfully!"
);

});

saveBtn.addEventListener(
"click",
function(){

alert(
"Resource saved successfully!"
);

});

shareBtn.addEventListener(
"click",
function(){

if(navigator.share){

navigator.share({

title:"CampusLink Resource",

text:"Check out this resource!",

url:window.location.href

});

}
else{

alert(
"Sharing is not supported on this device."
);

}

});

commentBtn.addEventListener(
"click",
function(){

const comment =
commentInput.value.trim();

if(comment==="") return;

commentsList.innerHTML += `

<div class="comment-card">

${comment}

</div>

`;

commentInput.value="";

});
