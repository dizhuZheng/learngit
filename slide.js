data = [
        {"name": "1.JPG", "info": "swimming"},
        {"name": "2.JPG", "info": "painting"},
        {"name": "3.JPG", "info": "drinking"},
        {"name": "4.JPG", "info": "Cat"},
        {"name": "5.JPG", "info": "Beef"},
        {"name": "6.JPG", "info": "Boat"},
        {"name": "7.JPG", "info": "Shore"},
        {"name": "8.JPG", "info": "Church"},
        {"name": "9.JPG", "info": "Sea"},
        {"name": "10.JPG", "info": "Fish"},
        {"name": "11.JPG", "info": "BBQ"},
        {"name": "12.JPG", "info": "Street"},
        {"name": "13.JPG", "info": "Ring"},
        {"name": "14.JPG", "info": "Another BBQ"},
        {"name": "15.JPG", "info": "Fruit"},
        {"name": "16.JPG", "info": "Walk"},
        {"name": "17.JPG", "info": "My Dog"},
        {"name": "18.JPG", "info": "Lake"},
        {"name": "19.JPG", "info": "Me"},
        {"name": "20.JPG", "info": "Window"}
    ]

var index;

function random()
{
    document.getElementById("main").style.display = "";
    var canvas = document.getElementById('viewport');
    var context = canvas.getContext('2d');
    index = Math.floor(Math.random()*20);
    var imag = data[index];
    document.getElementById("me").innerText = imag.info;
    make_base();
    function make_base()
    {
        base_image = new Image();
        base_image.src = imag.name;
        base_image.onload = function(){
        context.drawImage(base_image, 0, 0);
        }
    }
}

//document.getElementById("toggle").style.visibility="hidden";
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function sequence()
{
    var base_image;
    for(var i = 0; i<data.length; i++){
        base_image = data[i].name;
        document.getElementById("me").src = base_image;
    }

    function showDivs(n) {
        var canvas = document.getElementById('viewport');
        var context = canvas.getContext('2d');
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
}
}
