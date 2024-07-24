const scriptURL = 'https://script.google.com/macros/s/AKfycbxvzo9IndyI46Xdg3H6tuDyOd4Fzkq-aSIYR_3_KQRhC1t4SG7yasWW-rtZg-Gl8b1K/exec';
const form = document.forms['contact-form'];
var modal = document.getElementById("myModal");
var btn = document.querySelector(".contact-form .form-submit");
var span = document.getElementsByClassName("close")[0];


form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            modal.style.display = "flex";
})
    .catch(error => console.error('Error!', error.message));
 
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


