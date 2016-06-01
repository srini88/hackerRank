function highlight(event) {
    event.stopPropagation();
    alert(event.target.className);
}
var divs = document.getElementsByTagName('div');
for (var i=0; i<divs.length;++i){
    divs[i].addEventListener("click", highlight, false);
}