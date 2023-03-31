function myFunction() {
    var x = document.getElementById("mySelect").value;
    var nature = document.getElementById("nature").value;
    if((x == "C")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "C, D, E, F, G, A, B, C";}
    }else if((x =="C")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = "C, D, D#,	F,	G,	G#,	A#,	C";
    }
    if((x == "D")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "D, E, F#, G, A, B, C#, D";}
    }else if((x=="D")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = " D, E, F, G, A, A#, C, D";
    }
    if((x == "E")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "E, F#, G#, A, B, C#, D#, E";}
    }else if((x=="E")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = "E, F#, G, A, B, C, D, E";
    }
    if((x == "F")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "F, G, A, A#, C, D, E, F ";}
    }else if((x=="F")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = "F, G, G#, A#, C, C#, D#, F";
    }
    if((x == "G")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "G, A, B, C, D, E, F#, G ";}
    }else if((x=="G")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = "G, A, A#, C, D, D#, F, G";
    }
    if((x == "A")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "A, B, C#, D, E, F#, G#, A";}
    }else if((x=="A")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = "A, B, C, D, E, F, G, A";
    }
    if((x == "B")&&(nature == "Major")){
       {document.getElementById("demo").innerHTML = "B, C#, D#, E, F#, G#, A#, B ";}
    }else if((x=="B")&&(nature == "Minor")){
        document.getElementById("demo").innerHTML = " B, C#, D, E, F#, G, A, B";
    }
    

}