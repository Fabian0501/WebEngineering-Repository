/* Idee: w3school */

/**
 * öffnet die KalenderWochen sidebar und schiebt content auf der website nach rechts. <br>
 * ggf. wird die andere sidebar geschlossen, wenn si offen ist, sodass nur eine sidebar offen ist.
 */
function openKWSidebar() {
    if (document.getElementById("sidebarTasks").style.width === "300px") {
        closeTasksSidebar();
    }
    document.getElementById("sidebarKW").style.width = "200px";

    document.getElementById("navbar").style.marginLeft = "200px";
    document.getElementById("navbar").style.width = "87vw";

    document.getElementById("iframe").style.marginLeft = "200px";
    document.getElementById("iframe").style.width = "1750px"; //1487
}


/**
 * schlißt die sidebar Kalenderwochen und schiebt den content auf der website wieder zurück. <br>
 * Entfernt dem element, der die Liste geöffnet hat, die class "active" beim schliessen der sidebar.
 */
function closeKWSidebar() {
    document.getElementById("sidebarKW").style.width = "0";
    document.getElementById("kw").classList.remove("active");
    resetNavbar();
    resetIframe();
}


/**
 * öffnet die Tasks sidebar und schiebt content bei seite. <br>
 * ggf. wenn die andere sidebar geöffnet ist, wird sie erst geschlossen bevor die neue öffnet.
 */
function openTasksSidebar() {
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
function closeTasksSidebar() {
    document.getElementById("sidebarTasks").style.width = "0";
    document.getElementById("tasks").classList.remove("active");
    resetNavbar();
    resetIframe();
}

function resetNavbar() {
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("navbar").style.width = "97.5vw";
}
function resetIframe() {
    document.getElementById("iframe").style.marginLeft = "0";
    document.getElementById("iframe").style.width = "1770px";
}

/**
 * sorgt dafür das bei click immer nur einer der beiden button aktiv ist
 * @param clickedElement this
 */
function setActive(clickedElement) {
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

function changeIframe(value) {
    document.getElementById("iframe").setAttribute("src", value);
    changeCurrentWatching(value)
}
function defaultIframe() {
    document.getElementById("iframe").setAttribute("src", 'https://kaul.inf.h-brs.de/ccm/we/ws23/resources/img/website.jpg' )
}

function changeCurrentWatching(currentView) {
    let text = "Currently watching: ";
    let view = "";
    switch(currentView) {
        case 'kw41/kw41_1.7.html':
            view = 'HTML-Wireframe';
            break;
        case 'kw42/2.4_Wireframe.html':
            view = 'HTML-CSS-Wireframe';
            break;
        case 'kw43/wireframe.html':
            view = 'Wireframe responsive mit Grid';
        case 'kw44/4.3Fibonacci.html':
            view = 'Fibonacci';
        case 'kw46/rednerListe.html':
            view = 'Rednerliste';


        default:
        // code block
    }
    document.getElementById("changeDiv").innerText = currentView;
}

