let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* met le width de la side barre à 250px */

function openNav() {
    sidenav.classList.add("active");
}

/* met la width de la side barre à 0 */

function closeNav() {
    sidenav.classList.remove("active");
}