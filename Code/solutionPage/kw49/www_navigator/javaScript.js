function openHTMLSidebar() {
    closeCSSSidebar();
    closeJavascriptSidebar();
    document.getElementById("sidebarHTML").style.width = "300px";
    document.getElementById("navbar").style.marginLeft = "300px";
    document.getElementById("textField").style.marginLeft = "300px";
}
function closeHTMLSidebar() {
    document.getElementById("sidebarHTML").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("textField").style.marginLeft = "0";
    document.getElementById("html").classList.remove("active");
}
function openCSSSidebar() {
    closeHTMLSidebar();
    closeJavascriptSidebar();
    document.getElementById("sidebarCSS").style.width = "300px";
    document.getElementById("navbar").style.marginLeft = "300px";
    document.getElementById("textField").style.marginLeft = "300px";
}
function closeCSSSidebar() {
    document.getElementById("sidebarCSS").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("textField").style.marginLeft = "0";
    document.getElementById("css").classList.remove("active");
}
function openJavascriptSidebar() {
    closeHTMLSidebar();
    closeCSSSidebar();
    document.getElementById("sidebarJavascript").style.width = "300px";
    document.getElementById("navbar").style.marginLeft = "300px";
    document.getElementById("textField").style.marginLeft = "300px";
}
function closeJavascriptSidebar() {
    document.getElementById("sidebarJavascript").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("textField").style.marginLeft = "0";
    document.getElementById("javascript").classList.remove("active");
}

function setActive(clickedElement) {
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let javascript = document.getElementById("javascript");
    if (clickedElement === html) {
        html.classList.add("active");
        css.classList.remove("active");
        javascript.classList.remove("active");
    } else if (clickedElement === css){
        css.classList.add("active");
        html.classList.remove("active");
        javascript.classList.remove("active");
    } else if (clickedElement === javascript) {
        javascript.classList.add("active");
        html.classList.remove("active");
        css.classList.remove("active");
    }
}
