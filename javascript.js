document.getElementById("grow1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
    document.getElementById("boxQuokka").style.height = "300px";
});
document.getElementById("blue2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("fade3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "50%";
});
document.getElementById("move5").addEventListener("click", function(){
    document.getElementById("box").style.marginLeft = "50px";
})
document.getElementById("monkey6").addEventListener("click", function(){
    document.getElementById("boxQuokka").style.opacity = "100%";
})
document.getElementById("reset4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "100%";
    document.getElementById("box").style.marginLeft = "70px";
    document.getElementById("boxQuokka").style.opacity = "0%";
});