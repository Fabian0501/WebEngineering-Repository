
/*sidebar for KW*/
/* Set the width of the sidebar to 200px and the left margin of the page content to 200px */
function openKWSidebar() {
    //schliesst sidebarTasks, wenn sidebarTasks aktiv ist und sidebarKW geöffnet werden soll, sodass immer nur eine von meiden aktiv ist
    if (document.getElementById("sidebarTasks").style.width === "300px") {
        closeTasksSidebar();
    }
    document.getElementById("sidebarKW").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeKWSidebar() {
    document.getElementById("sidebarKW").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

    //beim schliessen der sidebar soll auch der button nicht mehr active sein
    document.getElementById("kw").classList.remove("active");
}


/*sidebar for important exam Tasks*/
/* Set the width of the sidebar to 300px and the left margin of the page content to 300px */
function openTasksSidebar() {
    //schliesst sidebarKW, wenn sidebarKW aktiv ist und sidebarTasks geöffnet werden soll.
    if (document.getElementById("sidebarKW").style.width === "200px") {
       closeKWSidebar();
    }
    document.getElementById("sidebarTasks").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeTasksSidebar() {
    document.getElementById("sidebarTasks").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

    //beim schliessen der sidebar soll auch der button nicht mehr active sein
    document.getElementById("tasks").classList.remove("active");
}

/**
 * sorgt dafür das bei clik immer nur einer der beiden button activ ist
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
