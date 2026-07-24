```javascript
// ==========================================
// HYPETAG WIKI
// JavaScript v1.0
// ==========================================

// Fade in Sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

// Navbar Scroll Effect

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(0,0,0,.95)";

navbar.style.boxShadow="0 0 20px rgba(255,49,49,.35)";

}else{

navbar.style.background="rgba(0,0,0,.75)";

navbar.style.boxShadow="none";

}

});

// Floating Particles

for(let i=0;i<45;i++){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDelay=Math.random()*8+"s";

particle.style.animationDuration=(6+Math.random()*8)+"s";

document.body.appendChild(particle);

}

// Back To Top Button

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";

topButton.style.pointerEvents="auto";

}else{

topButton.style.opacity="0";

topButton.style.pointerEvents="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
```
