const toggle = document.getElementById("themeToggle");

// Load saved theme
if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

    if(toggle){

        toggle.textContent="OFF";

    }

}

if(toggle){

toggle.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        toggle.textContent="OFF";

    }else{

        localStorage.setItem("theme","light");

        toggle.textContent="ON";

    }

});

}