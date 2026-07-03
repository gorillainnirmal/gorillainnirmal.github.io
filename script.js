// Smooth fade-in animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Header background on scroll

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){
        header.style.background="rgba(0,0,0,.8)";
    }else{
        header.style.background="rgba(0,0,0,.45)";
    }

});
