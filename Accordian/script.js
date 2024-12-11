window.onload = function(){

    // document variables

    headerOne = document.getElementById("headerOne");
    headerTwo = document.getElementById("headerTwo");
    headerThree = document.getElementById("headerThree");

    paragraphOne = document.getElementById("paragraphOne");
    paragraphTwo = document.getElementById("paragraphTwo");
    paragraphThree = document.getElementById("paragraphThree");

    // click events

    // header one

    headerOne.onclick = function(){

        if(paragraphOne.style.display === "none"){

            paragraphOne.style.display = "inline";
        }
        else{

            paragraphOne.style.display = "none";
        }

    }

    // header two

    
    headerTwo.onclick = function(){

        if(paragraphTwo.style.display === "none"){

            paragraphTwo.style.display = "inline";
        }
        else{

            paragraphTwo.style.display = "none";
        }

    }

    // header three

    headerThree.onclick = function(){

        if(paragraphThree.style.display === "none"){

            paragraphThree.style.display = "inline";
        }
        else{

            paragraphThree.style.display = "none";
        }

    }


}