 document.querySelector('#buttonPass').addEventListener('click',auth);
 

 function auth(){
    const email = document.querySelector("#user").value;
    const password = document.querySelector("#pass").value;
    if( email == "ajibolaabdullah2002@gmail.com" && password == "12345678"){
        alert('Login successful');
        window.location.assign('/index.html');
    }else{
        alert('Wrong Entry Inavlid Details');
        return;
        
    }  
 }
 

