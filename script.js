// ==========================
// HYPETAG WIKI
// ==========================

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

// Navbar background

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

navbar.style.background="rgba(0,0,0,.95)";
navbar.style.boxShadow="0 0 25px rgba(255,49,49,.35)";

}else{

navbar.style.background="rgba(10,10,10,.85)";
navbar.style.boxShadow="none";

}

});

// Create floating particles

for(let i=0;i<40;i++){

const dot=document.createElement("div");

dot.className="particle";

dot.style.left=Math.random()*100+"vw";

dot.style.animationDelay=Math.random()*8+"s";

dot.style.animationDuration=(5+Math.random()*8)+"s";

document.body.appendChild(dot);

}
