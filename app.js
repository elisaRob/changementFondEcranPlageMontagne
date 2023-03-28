const plage=document.querySelector(".plage");
const montagne=document.querySelector(".montagne");
const container=document.querySelector(".container");

plage.addEventListener("mouseenter",() => container.classList.add("hoverGauche"));
plage.addEventListener("mouseleave",() => container.classList.remove("hoverGauche"))

montagne.addEventListener("mouseenter",() => container.classList.add("hoverDroite"));
montagne.addEventListener("mouseleave",()=> container.classList.remove("hoverDroite"));