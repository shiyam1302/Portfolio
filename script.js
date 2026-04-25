// SCROLL
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show");});
});
document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));

// 3D TILT
document.querySelectorAll(".box").forEach(card=>{
card.addEventListener("mousemove",e=>{
let r=card.getBoundingClientRect();
let x=e.clientX-r.left,y=e.clientY-r.top;
let rx=-(y/r.height-.5)*10;
let ry=(x/r.width-.5)*10;
card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
});
card.addEventListener("mouseleave",()=>card.style.transform="rotate(0)");
});
