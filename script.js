let mediacome = document.querySelector(".prime-btn");
let mediago = document.querySelector(".cross");
let bar = document.querySelector("#bar")
let body = document.querySelector("body");
let tl = gsap.timeline();

tl.from("nav h1",{
    opacity:0,
    x:-50,
    duration:0.7
})
tl.from("#bar",{
    opacity:0,
    x:-40,
    duration:0.7,
    stagger:0.3
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
        stagger:0.4,
        backgroundColor:"white"
    })
})

mediacome.addEventListener("click",()=>{
    gsap.to(".socha-icon,.cross,.socha-icon a",{
        x:-0,
        duration:0.7,
        stagger:0.4,
        backgroundColor:"black"
    })
})
bar.addEventListener("click",()=>{
    gsap.to(".socha-icon,.cross,.socha-icon a",{
        x:-0,
        duration:0.7,
        stagger:0.4,
        backgroundColor:"black"
    })
})

gsap.from(".about h1,.about h3,.about p,#about-me",{
    x:-150,
    opacity:0,
    duration:0.4,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".sec-2",
        scrub:5,
        start:"top 80%",
        end:"top 30%",
    }
})
gsap.from(".img img",{
    x:150,
    opacity:0,
    duration:0.7,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".sec-2",
        scrub:5,
        start:"top 80%",
        end:"top 1%",
    }
})
gsap.to(".skill",{
  xPercent: -30,
  duration: 1,
  ease: "linear",
  scrollTrigger:{
       trigger:".skill",
       scroller:"body",
       start:"top bottom",
       end:"bottom top",
       scrub:1,
  }
})

gsap.to(".edq",{
  xPercent: -30,
  duration: 1,
  ease: "linear",
  scrollTrigger:{
       trigger:".edq",
       scroller:"body",
       start:"top bottom",
       end:"bottom top",
       scrub:1,
  }
})

// my Project

gsap.to(".project",{
  xPercent: -30,
  duration: 1,
  ease: "linear",
  scrollTrigger:{
       trigger:".my-pro",
       scroller:"body",
       start:"top bottom",
       end:"bottom top",
       scrub:1,
  }
})

// card1
gsap.from(".card2",{
    y:100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card2",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card22
gsap.from(".card22",{
    y:100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card22",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card222
gsap.from(".card222",{
    y:100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card222",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card1
gsap.from(".card1",{
    x:-100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card1",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card11
gsap.from(".card11",{
    x:-100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card11",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card111
gsap.from(".card111",{
    x:-100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card111",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card3
gsap.from(".card3",{
    x:100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card3",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card33
gsap.from(".card33",{
    x:100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card33",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})
// card333
gsap.from(".card333",{
    x:100,
    opacity:0,
    duration:0.4,
    ease:"linner",
    staager:0.4,
    scrollTrigger:{
        trigger:".card333",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 20%",
    }
})

//edqution card

gsap.from(".edq-card1",{
    y:-100,
    opacity:0,
    duration:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".edq-card1",
        scrub:5,
        start:"top 90%",
        end:"top 20%",
    }
})

gsap.from(".edq-card1 img, .edq-card1 h2, .edq-card1 h3, .edq-card1 h4",{
    y:-100,
    opacity:0,
    duration:0.2,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".edq-card1",
        scrub:5,
        start:"top 90%",
        end:"top 20%",
    }
})
// card 2 edq
gsap.from(".edq-card2",{
    y:100,
    opacity:0,
    duration:0.2,
    scrollTrigger:{
        scroller:"body",
        trigger:".edq-card2",
        scrub:5,
        start:"top 90%",
        end:"top 20%"
    }
})
gsap.from(".edq-card2 img, .edq-card2 h2, .edq-card2 h3, .edq-card2 h4",{
    y:100,
    opacity:0,
    duration:0.2,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".edq-card2",
        scrub:5,
        start:"top 90%",
        end:"top 20%"
    }
})