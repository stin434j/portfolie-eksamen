window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    console.log("siden vises");
    if (document.querySelector("#mere")) {
        document.querySelector("#mere").addEventListener("click", readMore);
    }



}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}




function readMore() {
    console.log('readMore:');
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}
