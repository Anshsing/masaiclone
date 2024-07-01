function showContent(section) {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('courses').style.display = 'none';
    document.getElementById('settings').style.display = 'none';
    
    document.getElementById(section).style.display = 'block';
  }

  function isLoggedIn(){
    //check if the key loggedInUser is in the localStorage of
    let name = localStorage.getItem('loggedInUser');
    let email = localStorage.getItem('email');
    let phone = localStorage.getItem('phone');
    if(name == null){
        //you are here means user is not logged in
        alert("This is login restricted area, please login first");
        //send user to the login page
        window.location.href = "signin.html";
    }
    //you are here means user is logged in
    let message = document.getElementById("message");
    console.log(email);
    let emaildisp = document.getElementById("emaildisp");
    let phonedisp = document.getElementById("phonedisp");
    message.innerText = "Hello " + name;
    emaildisp.innerText = "Email: " +email;
    phonedisp.innerText = "Phone: " +phone;
}

window.addEventListener('load', isLoggedIn);

function logout(){
    //remove key loggedInUser from local stoarge
    localStorage.removeItem("loggedInUser");
    //redirect the user to the login page
    window.location.href = "signin.html";
}

document.getElementById("logout").addEventListener('click', logout);
window.addEventListener('unload', logout);