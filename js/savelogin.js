
    let userlink = document.getElementById('userlink');
    let signoutlink = document.getElementById('signoutlink');
    let header = document.getElementById('hh');
    var currentUser = null;

    function getUsername(){
        let keepLoggedIn = localStorage.getItem("keepLoggedIn");

        if(keepLoggedIn == "yes"){
            currentUser = JSON.parse(localStorage.getItem('user'));
        }
        else{
            currentUser = JSON.parse(sessionStorage.getItem('user'));
        }
    }

    function Signout(){
        sessionStorage.removeItem('user');
        localStorage.removeItem('user');
        localStorage.removeItem('keepLoggedIn');
        window.location = "index.html";
    }
    window.onload = function(){
        getUsername();
        if(currentUser == null){
            userlink.innerText="Opret bruger";
            userlink.classList.replace("nav-link","btn");
            userlink.classList.add("btn");
            userlink.href = "register.html";
            document.getElementById("book tid").style.visibility="hidden";

            signoutlink.innerText="Log ind";
            signoutlink.classList.replace("nav-link","btn");
            signoutlink.classList.add("btn");
            signoutlink.href = "login.html";
        }

        else{
            userlink.innerText= currentUser.username;
            userlink.classList.replace("nav-link","btn");
            userlink.classList.add("btn");
            userlink.href = "";

            signoutlink.innerText="Log ud";
            signoutlink.classList.replace("nav-link","btn");
            signoutlink.classList.add("btn");
            signoutlink.href = "javascript:Signout()";
        }
    }
