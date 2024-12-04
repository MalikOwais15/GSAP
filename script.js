function pageOneAnimation() {
  var tl = gsap.timeline();

  tl.from('nav h1, .menu ul li, .req', {
    y: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from('.center-part1 h1', {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from('.center-part1 p', {
    x: -100,
    opacity: 0,
    duration: 0.3,
  });
  tl.from('.center-part1 button', {
    opacity: 0,
    duration: 0.1,
  });

  tl.from(
    '.center-part2',
    {
      x: 300,
      opacity: 0,
      duration: 1,
      stagger: -0.2,
    },
    '-=1'
  );
  tl.from('.logos img', {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
  });
}
// var tl = gsap.timeline();

function pageTwoAnimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      scroller: 'body',
      start: 'top 50%',
      end: 'top -40%',
      scrub: 3,
    },
  });

  tl2.from('.services', {
    y: 30,
    opacity: 0,
  });

  tl2.from(
    '.elem.line1.left',
    {
      x: -300,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      // scrub: 1,
    },
    'anim'
  );
  tl2.from(
    '.elem.line1.right',
    {
      x: 300,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      // scrub: 1,
    },
    'anim'
  );
  tl2.from(
    '.elem.line2.left',
    {
      x: -300,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      // scrub: 1,
    },
    'anim1'
  );
  tl2.from(
    '.elem.line2.right',
    {
      x: 300,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      // scrub: 1,
    },
    'anim1'
  );
  tl2.from(
    '.elem.line3.left',
    {
      x: -300,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      // scrub: 1,
    },
    'anim2'
  );
  tl2.from(
    '.elem.line3.right',
    {
      x: 300,
      opacity: 0,
      duration: 1,
      stagger: 0.6,
      // scrub: 1,
    },
    'anim2'
  );
}

pageOneAnimation();
pageTwoAnimation();
