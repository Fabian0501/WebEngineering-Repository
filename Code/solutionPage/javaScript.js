
/*sidebar for KW*/
/* Set the width of the sidebar to 200px and the left margin of the page content to 200px */
function openKWSidebar() {
    document.getElementById("sidebarKW").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeKWSidebar() {
    document.getElementById("sidebarKW").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


/*sidebar for important exam Tasks*/
/* Set the width of the sidebar to 300px and the left margin of the page content to 300px */
function openTasksSidebar() {
    document.getElementById("sidebarTasks").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeTasksSidebar() {
    document.getElementById("sidebarTasks").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}




/*header*/
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "60px 10px";
        document.getElementById("logo").style.fontSize = "15px";
    }
}