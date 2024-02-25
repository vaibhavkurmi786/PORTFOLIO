revealspan();

var tl = gsap.timeline();

tl.to(".parent .child",{
    y:"-100%",
    ease:Circ.easeInOut,
    delay:1,
    duration:1,
})
tl
.to("#loader",{
    height:0,
    duration:1,
    ease:Expo.easeInOut,
})
.to("#green",{
    height:"100vh",
    duration:1.5,
    delay:-1.2,
    ease:Expo.easeInOut,
})
.to("#white",{
    height:"100vh",
    duration:1.5,
    delay:-1.2,
    ease:Expo.easeInOut,
})




function revealspan(){
    
    document.querySelectorAll(".reveal").forEach(e => {
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
        
        spanParent.classList.add("parent")
        spanChild.classList.add("child")
        
        spanParent.appendChild(spanChild);
        spanChild.textContent = e.textContent;
        
        e.innerHTML = "";
        e.appendChild(spanParent);
    });

}

    





