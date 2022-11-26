let users = JSON.parse(localStorage.getItem("users")) || [];
var form= document.getElementById('Regform');
var uname= document.getElementById('unam') ;
var email= document.getElementById('umail');
var password= document.getElementById('upass');
var cpassword= document.getElementById('ucpass');

var UsernameBool =false;
var emailBool =false;
var passwordBool =false;
var cpasswordBool =false;



Regform.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkInputs();
})

function  checkInputs(){
    if(uname.value===''){
        setErrorFor(uname,'Username cannot be blank!');
    }
    else{
        UsernameBool =true;
        setSuccessFor(uname);
    }
    if(email.value===''){
        setErrorFor(email,'Email cannot be blank!');
    }
    else{
        emailBool =true;
        setSuccessFor(email);
    }

    if(password.value===''){
        setErrorFor(password,'Password cannot be blank!');
    }
    else{
        passwordBool =true;
        setSuccessFor(password);
    }

    if(cpassword.value===''){
        setErrorFor(cpassword,'Password cannot be blank!');
    }
    else if(password.value!==cpassword.value){
        setErrorFor(cpassword,'Password does not match!');
    }

    else{
        cpasswordBool =true;
        setSuccessFor(cpassword);
    }
    console.log(uname.value ,email.value, password.value, cpassword.value)
    let user = {
                name: uname.value,
                email: email.value,
                password: password.value,
                confirmtionPass: cpassword.value
            }
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users));
}    




function setErrorFor(input,message){
   const formcontrol =input.parentElement;
   const small =formcontrol.querySelector('small');
   small.innerText =message;

   formcontrol.className ='form-control error'

}


function setSuccessFor(input){
   const formcontrol =input.parentElement;
   formcontrol.className ='form-control succcess';
   if(UsernameBool===true && emailBool===true && passwordBool==true && cpasswordBool==true){

    localStorage.setItem("users", JSON.stringify(users));
        window.location=("../Login/Login.html")
   }
}


// --------------------validation(regex)---------------------------
// var btn= document.getElementById('sub')

// var regname=  /^[a-zA-Z ]{2,30}$/;
// var regemail= /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
// var regpass= /^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/;


// function validatedata(){
//     if(regname.match(uname.value)){
        

//     }
//     else{

//     }

//     if(regemail.match(email.value)){

//     }
//     else{

//     }
//    
//     if(regpass.match(password.value)){

//     }
//     else{

//     }

// }

// function storedata(){
//     let user={
//         name: uname.value,
//         email: email.value,
//         phone: phone.value,
//         password: password.value,
//     }


// users.push(user)
            
// console.log(users)
// localStorage.setItem("users", JSON.stringify(users));

// event.preventDefault();
// }