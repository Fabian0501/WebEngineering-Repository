
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
}


/**
 * schlißt die sidebar Kalenderwochen und schiebt den content auf der website wieder zurück. <br>
 * Entfernt dem element, der die Liste geöffnet hat, die class "active" beim schliessen der sidebar.
 */
function closeKWSidebar() {
    document.getElementById("sidebarKW").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("kw").classList.remove("active");
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

}

/**
 * schliesst die Tasks sidebar und schiebt content wieder zurück. <br>
 * entfernt die class "active" von dem element das die sidebar aufgerufen hat.
 */
function closeTasksSidebar() {
    document.getElementById("sidebarTasks").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("tasks").classList.remove("active");
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
