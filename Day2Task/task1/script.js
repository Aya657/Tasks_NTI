var username = "Aya";
var password = "12345";
if (username == ""){
    alert("Username is required . ");
}
else if (password.length < 8 ){
    alert("Password must be at least 8 characters .");
}
else{
    console.log("your username is : " + username + " , and your password is : " + password);
}