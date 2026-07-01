const buttons =
document.querySelectorAll(
".search-categories button"
);

const resources =
document.querySelectorAll(
".search-resource"
);

buttons.forEach(button=>{

button.addEventListener(
"click",
function(){

buttons.forEach(btn=>{
btn.classList.remove("active");
});

this.classList.add("active");

const category =
this.textContent
.toLowerCase();

resources.forEach(resource=>{

if(
category==="all" ||
resource.dataset.category===category
){

resource.style.display="flex";

}
else{

resource.style.display="none";

}

});

});

});
