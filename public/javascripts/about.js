document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelectorAll("#highlight-effect"),
        t = document.querySelectorAll(".count"),
        r = document.querySelector("#statistics"),
        n = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting ? e.target.classList.add("in-view") : e.target.classList.remove("in-view") }) }, { threshold: .5 }); e.forEach(e => { n.observe(e) });
    let i = e => {
        let t = +e.getAttribute("data-count"),
            r = 0, n = Math.ceil(t / 100),
            i = () => {
                r < t ? (r += n,
                    e.innerText = r > t ? t : r, setTimeout(i, 20)) : e.innerText = t
            }; i()
    }, s = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && (t.forEach(e => i(e)), s.unobserve(r)) }) }, { threshold: .5 }); s.observe(r)
});