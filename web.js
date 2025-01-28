Shery.mouseFollower();
Shery.makeMagnet(".x");
Shery.hoverWithMediaCircle(".hvr",{images:["img1.png","img3.webp"]})
gsap.to(".f-left",{
  scrollTrigger:{
    trigger:".fimage",
    pin:true,
    start:"top top",
    end:"bottom bottom",
    endTrigger:".last",
    scrub:1
  },
  y: "-300%",
  ease:Power1
})

Shery.makeMagnet(".but,.butt,.m");