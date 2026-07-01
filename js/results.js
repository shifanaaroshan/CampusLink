const params =
new URLSearchParams(
window.location.search
);

const type =
params.get("type");

const container =
document.getElementById(
"resultsContainer"
);

let resources = [];

if(type==="java"){

resources = [

{
title:"Java Programming Notes",
desc:"Notes • Uploaded by Faculty"
},

{
title:"Java PPT",
desc:"PPT • Uploaded by Student"
},

{
title:"Java Interview Experience",
desc:"Experience • Uploaded by Alumni Student"
},

{
title:"Java Audio Notes",
desc:"Audio • Uploaded by Faculty"
}

];

}

else if(type==="dbms"){

resources = [

{
title:"DBMS Notes",
desc:"Notes • Uploaded by Faculty"
},

{
title:"DBMS Complete PPT",
desc:"PPT • Uploaded by Student"
},

{
title:"DBMS Question Paper",
desc:"Question Paper • Uploaded by Faculty"
}

];

}

else if(type==="os"){

resources = [

{
title:"Operating System Audio",
desc:"Audio • Uploaded by Faculty"
},

{
title:"Operating System Notes",
desc:"Notes • Uploaded by Faculty"
},

{
title:"Operating System Question Paper",
desc:"Question Paper • Uploaded by Faculty"
}

];

}

else{

resources = [

{
title:"Java Programming Notes",
desc:"Notes • Uploaded by Faculty"
},

{
title:"DBMS Complete PPT",
desc:"PPT • Uploaded by Student"
},

{
title:"Operating System Audio",
desc:"Audio • Uploaded by Faculty"
}

];

}

resources.forEach(resource=>{

container.innerHTML += `

<div class="result-card">

<h3>${resource.title}</h3>

<p>${resource.desc}</p>

<a href="resource.html">

View Resource

</a>

</div>

`;

});
