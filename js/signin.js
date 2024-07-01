//code to access form having id "login" starts here
let loginForm = document.getElementById("login");


//code to submit the login form
loginForm.addEventListener('submit', function(event){
    //create FormData object for loginForm
    let fd = new FormData(event.target);
    //check if form is validated or not
    if(isLoginFormValidated(fd)){
        //You are here means form is validated
        //check if username exists in the local storage
        let userData = localStorage.getItem(fd.get("email"));
        let isLoginSuccesssful = true;
        if(userData == null){
            //you are here means username doesn't exists
            isLoginSuccesssful = false;
        }else{
            //convert the userData to the object from String type
            userData = JSON.parse(userData)
            if(userData["password"] != loginForm.password.value){
                //you are here means password is incorrect
                isLoginSuccesssful = false;
            }
        }
        if(!isLoginSuccesssful){
            //you are here means username and password mismatched
            alert("Invalid username or password");
            event.preventDefault();
        }else{
            //you are here means username and password are valid
            alert("Login Successful");
            //write the name of logged in user to localstorage for the key 'loggedInUser'
            localStorage.setItem('loggedInUser', userData["name"])
            localStorage.setItem('email', userData["email"])
            localStorage.setItem('phone', userData["phone"])
            //load a new page that is login protected and display some name of user there
            window.location.href = "userdash.html";
        }
    }
    event.preventDefault();
})

function isLoginFormValidated(fd){
    let message = "";
    if(fd.get('email').trim().length == 0){
        //you are here means no value for name
        message = "Please provide username";
    }
    if(fd.get('password').length == 0){
        //you are here means no value for password
        message != ""?(message+="\nPlease provide password"):(message = "Please provide password");
    }
    if(message != ""){
        alert(message);
        return false;
    }
    return true;
}