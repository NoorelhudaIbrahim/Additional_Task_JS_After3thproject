let users = JSON.parse(localStorage.getItem("users")) || [];
var form= document.getElementById('logform');
var email= document.getElementById('umail');
var password= document.getElementById('upass');




logform.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkInputs();
})

function  checkInputs(){
    users.map(e =>{
        console.log(e.email == email.value, e.password == password.value)
        if(e.email == email.value && e.password == password.value){
            localStorage.setItem('current', JSON.stringify(e.email))
            window.location=("../Main/Main.html")
            console.log('welcome')}

    })
}


