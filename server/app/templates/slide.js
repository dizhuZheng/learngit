var slideIndex;
var flag = false;
var v;

var myObj, i, x = "";

var obj,values,xmlhttp,myObj,x,txt="";
obj={div:"pic",limit:20};
values=JSON.stringify(obj);
xmlhttp= new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (x in myObj) {
          txt += "<img>" + myObj[x].src  + myObj[x].info;
        }   
        document.getElementById("pic").innerHTML = txt;
      }
};

// xmlhttp.open("POST", "test.php", true);
// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.send("x=" + values);

function messageServer() {
    var x = document.getElementById("ajax_input").value;
    console.log("Value changed to " + x);
    document.getElementById("fast_output").innerHTML = "You selected: " + x;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajax_output").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:5000", true);
    xhttp.send();
}

function showSlides() {
    disappear();

    document.getElementById("keys").style.display = "block";
    if (document.getElementById("play").value == "Random" && !flag) {
        slideIndex = 0;
        document.getElementsByTagName("A")[2].style.display = "block";
        document.getElementsByTagName("A")[3].style.display = "block";
        document.getElementsByTagName("A")[0].style.display = "none";
        document.getElementsByTagName("A")[1].style.display = "none";
        b();
    }

    else if (document.getElementById("play").value == "Sequential")
    {
        slideIndex = 1;
        document.getElementsByTagName("A")[0].style.display = "block";
        document.getElementsByTagName("A")[1].style.display = "block";
        document.getElementsByTagName("A")[2].style.display = "none";
        document.getElementsByTagName("A")[3].style.display = "none";
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
    var list = document.getElementById("pic");
    var slides = list.getElementsByTagName("IMG");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        ctx.clearRect(15, 15, 650, 650);
    }
    ctx.drawImage(slides[slideIndex - 1], 15, 15);
    ctx.font = "bold 30px arial";
    ctx.fillStyle = "blue";
    ctx.fillText(slideIndex + "/" + slides.length, 500, 500);
}

function b() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;
    var list = document.getElementById("pic");
    var slides = list.getElementsByTagName("IMG");

    for (i = 0; i < slides.length; i++) {
        ctx.clearRect(15, 15, 650, 650);
    }

    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    ctx.drawImage(slides[slideIndex - 1], 15, 15);
    ctx.font = "bold 30px arial";
    ctx.fillStyle = "blue";
    ctx.fillText(slideIndex + "/" + slides.length, 500, 500);
    v = setTimeout(b, 2000); 
    v;
}

function disappear() {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
}