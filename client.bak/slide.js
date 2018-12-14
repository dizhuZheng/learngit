var slideIndex;
var flag = false;
var v;
var myArr = ["caption1","caption2","caption3","caption4","caption5","caption6",
"caption7","caption8","caption9","caption10","caption11","caption12",
"caption13","caption14","caption15","caption16","caption17","caption18",
"caption19","caption20"];

function showSlides() {
    disappear();

    document.getElementById("keys").style.display = "block";

    if (document.getElementById("play").value == "Random" && !flag) {
        document.getElementById("key2").style.display = "block";
        slideIndex = 0;
        b();
    }

    else if (document.getElementById("play").value == "Sequential")
    {
        document.getElementById("key1").style.display = "block";
        slideIndex = 1;
        a(slideIndex);
    }

    if(document.getElementById("effect").value == "Transition")
    {
        document.getElementById("myCanvas").classList.add("transit");
    }

    else if(document.getElementById("effect").value == "Transformation")
    {
        document.getElementById("myCanvas").classList.add("transform");
    }
}

    function plusSlides(n) {
        a(slideIndex += n);
    }

    function currentSlide(n) {
        a(slideIndex = n);
    }

    function stop(){
        flag = true;
        clearTimeout(v);
    }

    function start(){
        flag = false;
        b();
    }

function a(n) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;
    var slides = document.getElementsByTagName("IMG");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        ctx.clearRect(15, 15, 650, 650);
    }
    ctx.drawImage(slides[slideIndex - 1], 15, 15);

    ctx.font = "bold 30px arial";
    ctx.fillStyle = "blue";
    ctx.fillText(myArr[slideIndex-1],400,500);
}

function b() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;
    var slides = document.getElementsByTagName("IMG");

    for (i = 0; i < slides.length; i++) {
        ctx.clearRect(15, 15, 650, 650);
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    ctx.drawImage(slides[slideIndex - 1], 15, 15);
    ctx.font = "bold 30px arial";
    ctx.fillStyle = "blue";
    ctx.fillText(myArr[slideIndex-1],400,500);
    v = setTimeout(b, 2000);
    v;
 }

function disappear() {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
}

function check(){
    if(document.getElementById("play").value == "" || document.getElementById("effect").value == "")
        document.writeln("Either input can't be empty !");
    else
        showSlides();
}