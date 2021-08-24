
const form=document.getElementById('form');
const fullname=document.getElementById('fullname');
const email=document.getElementById('email');
const username=document.getElementById('username');
const password=document.getElementById('password');
const password2=document.getElementById('password2');



form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const fullnameValue=fullname.value.trim();
    const emailValue=email.value.trim();
    const usernameValue=username.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if (emailValue==='') {
        setErrorFor(email,'Email cannot blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Email cannot valid');
    }else{
        setSuccesFor(email);
    }

    if(passwordValue===''){
        setErrorFor(password,'Password cannot be blank')
    }else{
        setSuccesFor(password)
    }

    if(password2Value===''){
        setErrorFor(password2,'Password cannot be blank')
    }else if(passwordValue!==password2Value){
        setErrorFor(password2,'password does not match')
    }
    else{
        setSuccesFor(password2)
    }


    if (fullnameValue==='') {
        setErrorFor(fullname,'FullName cannot be blank')
    }else if(fullname.target.value.length<2){
        setErrorFor(fullname,'FullName cannot be 2 character')
    }
    else{
        setSuccesFor(fullname)
    }

    if (usernameValue==='') {
        setErrorFor(username,'UserName cannot be blank')
    }else if(username.target.value.length<2){
        setErrorFor(username,'UserName cannot be 2 character')
    }
    else{
        setSuccesFor(username)
    }
}

username.addEventListener('change',function (e) {
    if(e.target.value.length<2){
        setErrorFor(username,'UserName cannot be 2 character')
    }else{
        setSuccesFor(username)
    }
}); 

fullname.addEventListener('change',function (event) {
    if(event.target.value.length<2){
        setErrorFor(fullname,'FullName cannot be 2 character')
    }else{
        setSuccesFor(fullname)
    }
});


function setErrorFor(input,message) {
    const formControl=input.parentElement;
    const small=formControl.querySelector('small')

    small.innerText=message;

    formControl.className='form-control error'
}


function setSuccesFor(input) {
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
