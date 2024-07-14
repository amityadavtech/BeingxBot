document.addEventListener('scroll', function () {
    // Selecting necessary elements
    const timeline = document.querySelector('.timeline');
    const progress = document.querySelector('.progress');
    
    // Getting dimensions and positions
    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Customize these variables to adjust start and end scroll positions
    const startOffset = -300; // Pixels from the top of the timeline element
    const endOffset = 350; // Pixels from the bottom of the timeline element

    // Calculate the start and end positions based on offsets
    const start = window.scrollY + timelineRect.top - windowHeight / 2 + startOffset;
    const end = window.scrollY + timelineRect.bottom - windowHeight / 2 - endOffset;

    // Calculate the scroll progress as a percentage
    let scrollProgress = (window.scrollY - start) / (end - start);
    scrollProgress = Math.max(0, Math.min(1, scrollProgress)); // Ensure progress is between 0 and 1

    // Update the progress bar height based on scroll progress
    progress.style.height = (scrollProgress * 100) + '%';
});


// Scroll Reveal



  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.left-step .sec-container', { delay: 100 })

  const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srBottom.reveal('.service-card', { delay: 100 })
  
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.right-step .sec-container', { delay: 100 })
  