function addUser() {

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "quiz_game_page.html";


    player1_n = localStorage.getItem(player1_name)
    document.getElementById(player1_name).innerHTML = "<h4>" + player1_n + "</h4>"

    player2_n = localStorage.getItem(player2_name)
    document.getElementById(player2_name).innerHTML = "<h4>" + player2_n + "</h4>"
}