let mediacome = document.querySelector(".prime-btn");
let mediago = document.querySelector(".cross");
let tl = gsap.timeline();

tl.from("nav h1",{
    opacity:0,
    x:-50,
    duration:0.7
})
tl.from(".menu a,.prime-btn",{
    opacity:0,
    x:-40,
    duration:0.7,
    stagger:0.3
})
tl.from(".port",{
    opacity:0,
    scale:0.1,
    duration:0.8,
    ease:"power3.out"
})
tl.from("#img-1,.info-img h1,.info-img h3",{
    opacity:0,
    x:-50,
    duration:0.6,
    stagger:0.4
})
tl.from(".socha-icon,.cross,.socha-icon a",{
    x:400,
    opacity:0,
    duration:1,
    stagger:0.4
})
mediago.addEventListener("click",()=>{
    gsap.to(".socha-icon,.cross,.socha-icon a",{
        x:400,
        duration:0.7,
        stagger:0.4
    })
})
mediacome.addEventListener("click",()=>{
    gsap.to(".socha-icon,.cross,.socha-icon a",{
        x:-0,
        duration:0.7,
        stagger:0.4
    })
})

gsap.from(".about h1,.about h3,.about p",{
    x:-150,
    opacity:0,
    duration:0.7,
    stagger:0.4,
    scrollTrigger:{
        scroller:"body",
        trigger:"sec-2",
        scrub:5,
        start:"top 70%",
        end:"",
        markers:true
    }
})