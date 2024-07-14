document.addEventListener("DOMContentLoaded", function () {
    const highlights = document.querySelectorAll("#highlight-effect");
    const counters = document.querySelectorAll('.count');
    const section = document.querySelector('#statistics');

 
    const highlightObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        },
        { threshold: 0.5 } 
    );

    highlights.forEach((highlight) => {
        highlightObserver.observe(highlight);
    });

   
    const startCountUp = (counter) => {
        const target = +counter.getAttribute('data-count');
        let count = 0;
        const increment = Math.ceil(target / 100); 
        const updateCount = () => {
            if (count < target) {
                count += increment; 
                counter.innerText = count > target ? target : count; 
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Intersection Observer for counting animation
    const countObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => startCountUp(counter));
                    countObserver.unobserve(section); 
                }
            });
        },
        { threshold: 0.5 } 
    );

    countObserver.observe(section);
});
