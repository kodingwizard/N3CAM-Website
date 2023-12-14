var objDevs = [
    {
        username : "B. L. M.axamillian",
        password : "BeaufortLeeuwenhoekMaximillian"
    }
]
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0 ; i< objDevs.length;i++){
        if (username == objDevs[i].username && password == objDevs[i].password){
            console.log(username + "is logged in")
            window.location.href ="index.html";
            return
        }
    }
    window.alert("You have failed. How... disappointing.")
}