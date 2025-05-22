// smooth scroll
{
    // Initialize LocomotiveScroll for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 1.0, // Adjust for speed of scroll if necessary
    class: 'is-animated',
    getDirection: true, // Ensures scrolling direction is calculated
    scrollFromAnywhere: true, // Enables scrolling even when the mouse is not at the top
});
// Fixing any interaction issues with LocomotiveScroll
// Update Locomotive Scroll when the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    scroll.update();
});

// Ensure that scroll updates properly after window resize as well
window.addEventListener('resize', () => {
    scroll.update();
});

}


var timeout;
 
//mouseMovingsrinkingAndGrowingEffect
{
    function circleMovingEvent() {
    //define default scale value
    var xscale =1;
    var yscale=1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets) {
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale =  gsap.utils.clamp(.8,1.1,xdiff);
        yscale = gsap.utils.clamp(.8,1.1,ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale,yscale);
        timeout = setTimeout(function(){
                     document.querySelector("#minicircle").style.transform = 
            `translate(${dets.clientX - 5}px , ${dets.clientY - 5}px) scale(1,1)`;
        },100);
    });
}
}

//mouse effect
{
    // Function for mouse follower effect
function circleMouseFollower(xscale , yscale) {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#minicircle").style.transform = 
            `translate(${dets.clientX - 5}px , ${dets.clientY - 5}px) scale(${xscale}, ${yscale})`;
    });
}
}

// First page animation function using GSAP
{
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1,
        delay: -0.8,
        ease: Expo.easeInOut,
        onComplete: () => {
            // Update Locomotive Scroll after the animations are done
            scroll.update();
        }
    });
}
}

//imageEffect
{

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;

    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

}

// Call the necessary functions
circleMouseFollower();
firstPageAnim();
circleMovingEvent();

