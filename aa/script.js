var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    // Chota cursor real cursor se thoda sa left upar (5px)
    crsr.style.left = (dets.x - 5) + "px";
    crsr.style.top = (dets.y - 5) + "px";
    // Bada blur cursor real cursor se aur dur (200px left upar)
    gsap.to(blur, {
        left: (dets.x - 200) + "px",
        top: (dets.y - 200) + "px",
        duration: 0.4,
        ease: "power2.out"
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: .5,
    delay: .5,
    height: "130px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        marker: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 3 ,
    }
});
