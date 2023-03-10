var select = document.getElementById("select");
var selected = document.getElementById("selected");
var opt = document.getElementsByClassName("opt");
var grp = document.getElementById("grp");
var arrow = document.getElementById("arrow");

for( opt of opt){
    opt.onclick = function(){
        selected.innerHTML = this.textContent;
        grp.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    }
}


select.onclick = function(){
    grp.classList.toggle("hide");
    arrow.classList.toggle("rotate");
    
}

