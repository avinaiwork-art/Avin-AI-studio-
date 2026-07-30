/* ==========================================
   AD STUDIOS
   SCRIPT.JS
========================================== */

/* Mouse Spotlight */

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    if(cursorGlow){

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    }

});

/* Smooth Reveal Animation */

const revealElements = document.querySelectorAll(

'.serviceCard,.projectCard,.featuredProject,.timelineItem,.aboutCard,.statCard,.contactBox,.showreelCard'

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

/* Navbar Blur */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(5,5,5,.82)";
navbar.style.backdropFilter="blur(22px)";
navbar.style.padding="18px 7%";

}else{

navbar.style.background="rgba(5,5,5,.55)";
navbar.style.padding="24px 7%";

}

});

/* Smooth Anchor Links */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* Button Hover Glow */

const buttons=document.querySelectorAll(

".primaryButton,.secondaryButton,.navButton,.watchButton"

);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px rgba(95,227,255,.35)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

});

/* Footer Year */

const footer=document.querySelector(".footerBottom p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} AD STUDIOS. Designed & Built by Avin.`;

}

console.log("AD STUDIOS Portfolio Loaded.");
