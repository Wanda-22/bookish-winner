p=localStorage.getItem("p1");
l=localStorage.getItem("p2");
s1=0;
s2=0;
document.getElementById('p1n').innerHTML=p+" - ";
document.getElementById('p2n').innerHTML=l+" - ";
document.getElementById('p1s').innerHTML=s1;
document.getElementById('p2s').innerHTML=s2;
document.getElementById('q').innerHTML="Question Turn = "+p;
document.getElementById('ans').innerHTML="Answer Turn = "+l;

function send() {
    w=document.getElementById('word').value;
    z1=w.toLowerCase();
    console.log(z1);
    
    c1=z1.charAt(1);
    console.log(c1);

    le1=Math.floor(z1.length/2);
    c2=z1.charAt(le1);
    console.log(c2);

    miun=z1.length-1;
    c3=z1.charAt(miun);
    console.log(c3);

    r1=z1.replace(c1,"_");

    r2=r1.replace(c2,"_");

    r3=r2.replace(c3,"_");
    console.log(r3);

    question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;

    document.getElementById('output').innerHTML=row;
    document.getElementById('word').value="";
}

question_trun="player1";
answer_trun="player2";
function check() {
    e=document.getElementById('input_check_box').value;
    f=e.toLowerCase();
    console.log(f);

    if (f==z1) {
        if(answer_trun=="player1"){
            s1=s1+1;
            document.getElementById('p1s').innerHTML=s1;
        } 
        else{
            s2=s2+1;
            document.getElementById('p2s').innerHTML=s2;
        }
    }

    if (question_trun=="player1") {
        question_trun="player2";
        document.getElementById('q').innerHTML="Question Turn = "+l;
    }
    else{
        question_trun="player1";
        document.getElementById('q').innerHTML="Question Turn = "+p;
    }

    if (answer_trun=="player1") {
        answer_trun="player2";
        document.getElementById('ans').innerHTML="Answer Turn = "+l;
    }
    else{
        answer_trun="player1";
        document.getElementById('ans').innerHTML="Answer Turn = "+p;
    }
    document.getElementById('output').innerHTML="";

}