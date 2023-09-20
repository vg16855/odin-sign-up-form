
const checkPassword = function(){
    let pw = document.getElementById("pswd").value;
    let cpw = document.getElementById("cpswd").value;
    if(pw != cpw){
        document.getElementById("message").innerHTML = "**Passwords must match";
        let passwords = document.getElementsByClassName("pswd");
        for(let i = 0; i < passwords.length; i++){
            passwords[i].classList.add("error")
        }
        return false;
    }
    return true;

}