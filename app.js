var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();
triangle.style.strokeDasharray = length;
triangle.style.strokeDashoffset = length;
window.addEventListener("scroll" ,myFunction);

function myFunction() {
    var scrollpercent =(document.body.scrollTop+document.documentElement.scrollTop)
    /(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var draw = length * scrollpercent;
    triangle.style.strokeDashoffset = length - draw;   
}
//get the id of svg element
document.getElementById("mySVG").style.position = "fixed";
document.getElementById("mySVG").style.top = "15%";
document.getElementById("mySVG").style.width = "400px";
document.getElementById("mySVG").style.height = "210px";
document.getElementById("mySVG").style.marginLeft = "600px";

