var button=document.getElementById("autoscrollon");
var button2=document.getElementById("autoscrolloff");
var win=document.getElementById("homepage_content")

function pageScroll(){
        clearTimeout(scroll);
        win.scrollBy(0,1);
        scroll=setTimeout(pageScroll,40);
}

function stopScroll(){
    clearTimeout(scroll);
}

button.addEventListener("click",pageScroll);
button2.addEventListener("click",stopScroll);
