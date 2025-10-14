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

// About-us image hover/touch animation
var aboutImgs = document.querySelectorAll('#about-us img');
aboutImgs.forEach(function(img){
    // desktop hover - gentle lift using GSAP
    img.addEventListener('mouseenter', function(){
        // quick pop up (grow) then settle back
        gsap.killTweensOf(img);
        var tl = gsap.timeline();
        tl.to(img, { y: -16, scale: 1.16, rotation: -2, duration: 0.12, ease: 'power2.out' })
          .to(img, { y: 0, scale: 1, rotation: 0, duration: 0.45, ease: 'elastic.out(1, 0.6)' });
    });
    img.addEventListener('mouseleave', function(){
        gsap.killTweensOf(img);
        gsap.to(img, { y: 0, scale: 1, rotation: 0, duration: 0.25, ease: 'power2.out' });
    });

    // touch support for mobile: toggle class on touchstart and remove on touchend
    img.addEventListener('touchstart', function(e){
        e.preventDefault();
        img.classList.add('touch-active');
        gsap.killTweensOf(img);
        var tl2 = gsap.timeline();
        tl2.to(img, { y: -14, scale: 1.14, duration: 0.1, ease: 'power2.out' })
           .to(img, { y: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
    }, {passive: false});
    img.addEventListener('touchend', function(){
        img.classList.remove('touch-active');
        gsap.killTweensOf(img);
        gsap.to(img, { y: 0, scale: 1, duration: 0.2, ease: 'power2.out' });
    });
});
