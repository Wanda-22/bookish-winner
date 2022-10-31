function addUser() {
    x=document.getElementById("player1_name_input").value;
    y=document.getElementById("player2_name_input").value;

    localStorage.setItem("p1",x);
    localStorage.setItem("p2",y);

    window.location ="index1.html";
}