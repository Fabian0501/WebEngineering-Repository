/* Idee: w3school */

/**
 * öffnet die KalenderWochen sidebar und schiebt content auf der website nach rechts. <br>
 * ggf. wird die andere sidebar geschlossen, wenn si offen ist, sodass nur eine sidebar offen ist.
 */
const openKWSidebar = () => {
    if (document.getElementById("sidebarTasks").style.width === "300px") {
        closeTasksSidebar();
    }
    let screenWidth = window.innerWidth;
    if (screenWidth < 701) {
        document.getElementById("sidebarKW").style.width = "150px";
        document.getElementById("navbar").style.marginLeft = "150px";
        document.getElementById("navbar").style.width = "80vw";
        document.getElementById("iframe").style.marginLeft = "150px";
        document.getElementById("iframe").style.width = "1290px";

    }else {
        document.getElementById("sidebarKW").style.width = "200px";

        document.getElementById("navbar").style.marginLeft = "200px";
        document.getElementById("navbar").style.width = "87vw";

        document.getElementById("iframe").style.marginLeft = "200px";
        document.getElementById("iframe").style.width = "1750px"; //1487
    }
}


/**
 * schlißt die sidebar Kalenderwochen und schiebt den content auf der website wieder zurück. <br>
 * Entfernt dem element, der die Liste geöffnet hat, die class "active" beim schliessen der sidebar.
 */
const closeKWSidebar = () => {
    document.getElementById("sidebarKW").style.width = "0";
    document.getElementById("kw").classList.remove("active");
    resetNavbar();
    resetIframe();
}


/**
 * öffnet die Tasks sidebar und schiebt content bei seite. <br>
 * ggf. wenn die andere sidebar geöffnet ist, wird sie erst geschlossen bevor die neue öffnet.
 */
const openTasksSidebar = () => {
    //schliesst sidebarKW, wenn sidebarKW aktiv ist und sidebarTasks geöffnet werden soll.
    if (document.getElementById("sidebarKW").style.width === "200px") {
       closeKWSidebar();
    }
    document.getElementById("sidebarTasks").style.width = "300px";

    document.getElementById("navbar").style.marginLeft = "300px";
    document.getElementById("navbar").style.width = "78vw";

    document.getElementById("iframe").style.marginLeft = "300px";
    document.getElementById("iframe").style.width = "1190px";
}

/**
 * schliesst die Tasks sidebar und schiebt content wieder zurück. <br>
 * entfernt die class "active" von dem element das die sidebar aufgerufen hat.
 */
const closeTasksSidebar = () => {
    document.getElementById("sidebarTasks").style.width = "0";
    document.getElementById("tasks").classList.remove("active");
    resetNavbar();
    resetIframe();
}

const resetNavbar = () => {
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("navbar").style.width = "97.5vw";
}
const resetIframe = () => {
    document.getElementById("iframe").style.marginLeft = "0";
    document.getElementById("iframe").style.width = "1770px";
}

/**
 * sorgt dafür das bei click immer nur einer der beiden button aktiv ist
 * @param clickedElement this
 */
const setActive = (clickedElement) => {
    let kw = document.getElementById("kw");
    let tasks = document.getElementById("tasks");
    if (clickedElement === kw) {
        kw.classList.add("active");
        tasks.classList.remove("active");
    } else {
        tasks.classList.add("active");
        kw.classList.remove("active");
    }
}

const changeIframe = (value) => {
    let iframe = document.getElementById("iframe");
    let image = document.getElementById("image");

    // Überprüfe, ob das iframe sichtbar ist
    if (window.getComputedStyle(iframe).display === 'none') {
        iframe.style.display = "block"; // Verstecke das iframe
        image.style.display = "none"; // Zeige das Bild
        showHome();
    }
    iframe.setAttribute("src", value);
    changeCurrentWatching(value);
}
function changeCurrentWatching(currentView) {
    let text = "Currently watching: ";
    let view = "";
    switch(currentView) {
        case 'kw41/kw41_1.7.html':
            view = '1.7 HTML-Wireframe';
            break;
        case 'kw42/2.4_Wireframe.html':
            view = '2.4 HTML-CSS-Wireframe';
            break;
        case 'kw43/mobileFirst.html':
            view = '3.2 Mobile First Grid';
            break;
        case 'kw44/4.3Fibonacci.html':
            view = '4.3 Fibonacci';
            break;
        case 'kw46/rednerListe.html':
            view = '5.2 Rednerliste';
            break;
        case 'kw47/klammerPaare.html':
            view = '6.1 KlammerPaare';
            break;
        case 'kw48/filter.html':
            view = '7.2 Filter-map-reduce'
            break;
        case 'kw49/promises.html' :
            view = '8.1 Promises';
            break;
        case 'kw49/await_async.html':
            view = '8.2 Await & Async';
            break;
        case 'kw50/TicTacToGame/TicTacTo.html':
            view = '9.3 TicTacTo as SVG';
            break;
        case 'kw51/10.2.html':
            view = '10.2 TypeScript Mistakes';
            break;
        case 'http://localhost:3000':
            view = '11.1 Node.js Server';
            break;
    }

    let title = document.getElementById('title');
    title.style.marginTop = "20px";
    title.innerHTML = `<span style="font-size: 20px;">${text}</span>` + '<br>' +
        `<span style="font-size: 30px;">${view}</span>`;
    responsive();
}

window.onload = responsive;
window.onresize = responsive;

responsive = () => {
    let title = document.getElementById('title');
    let screenWidth = window.innerWidth;


    if (screenWidth < 701) {
        if (title.innerText === "Solution Navigator") {
            title.style.fontSize = '25px';
        }
        else {
            // Teile den Titeltext in zwei Teile auf
            let parts = title.innerText.split(':');
            let part1 = parts[0];
            let part2 = parts[1];
            title.innerHTML = `<span style="font-size: 15px;">${part1 + ":"}</span>` + '<br>' +
                `<span style="font-size: 20px;">${part2}</span>`;

        }
        title.style.marginTop = "25px";

    } else {

        if (title.innerText === "Solution Navigator") {
            title.style.fontSize = '40px';
        }else {
            let parts = title.innerText.split(':');
            let part1 = parts[0];
            let part2 = parts[1];
            title.innerHTML = `<span style="font-size: 20px;">${part1 + ":"}</span>` + '<br>' +
                `<span style="font-size: 30px;">${part2}</span>`;
        }
        title.style.marginTop = "20px";
    }
}

function showHome() {
    let homeIcon = document.getElementById('home');
    homeIcon.innerText = "🏠";
    homeIcon.style.pointerEvents = "auto"; // Aktiviere Mausereignisse
}
function removeIframe() {
    document.getElementById('iframe').src = "";
    document.getElementById('iframe').style.display = "none";
}

function showImage() {
    document.getElementById("image").style.display = "block";
}

function removeHome() {
    let homeIcon = document.getElementById('home');
    homeIcon.innerText = "";
    homeIcon.style.pointerEvents = "none"; // Deaktiviere Mausereignisse
}
function resetTitle() {

    let title = document.getElementById("title");
    title.innerText = "Solution Navigator";
    title.style.fontSize = "40px";
    title.style.marginTop = "40px";

}

function goHome() {
    closeKWSidebar();
    closeTasksSidebar();
    removeIframe();
    showImage();
    removeHome();
    resetTitle();
}

/*
// stellt die funktionalität etwas im terminal einzugeben von Node.js-Modul zu verfügung
const { exec } = require('child_process');
function startNodeServer() {
    const serverPath = 'kw52/server.js';
    exec(`node ${serverPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Fehler beim Starten des Servers: ${error.message}`);
            return;
        }
        if (stderr) { // standard error
            console.error(`Fehlerausgabe: ${stderr}`);
            return;
        }
        console.log(`Serverausgabe: ${stdout}`); // standard ausgabe
        changeIframe('http://localhost:3000');
    });
}*/
