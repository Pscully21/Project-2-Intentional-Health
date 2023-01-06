
  document.getElementById('login-btn').addEventListener("click",function(){
    let popup= document.querySelector('.login').style.display="block";
});
document.getElementById('close').addEventListener("click",function(){
    let popdown = document.querySelector('.login').style.display="none";
});

document.getElementById('signup-btn').addEventListener("click",function(){
    let popup= document.querySelector('.signup').style.display="block";
});

document.getElementById('close1').addEventListener("click",function(){
    let popdown=document.querySelector('.signup').style.display="none";
});

var login = document.getElementById('login');
window.onclick = function(eventl){
    if(eventl.target==login){
        login.style.display='none';
    }
};

var signup = document.getElementById('signup');
window.onclick = function(events){
    if(events.target==signup){
        signup.style.display='none';
    }
};
