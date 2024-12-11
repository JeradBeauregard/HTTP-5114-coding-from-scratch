window.onload = function(){


    // image container

    var image = document.getElementById("slideshowImage");

    // button

    var btn = document.getElementById("btn");

    //function to change src

    //image src array

    var src = ["./images/goblin.png","./images/Lorryn.jpg","./images/Shaman.jpg","./images/Sorrena.jpg","./images/Suzy.png","./images/underwater.jpg","./images/Jerad.jpg"];

    i = 0;

    btn.onclick = function(){

        image.src = src[i];
        i++

        if(i === 6){
            i = 0;
        }

    }



}