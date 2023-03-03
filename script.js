const formEl = document.getElementById('form')
const usernameEl=document.getElementById('username');
const emailEl = document.getElementById('email-element');
const passwordEl =document.getElementById('password');
const confirmpasswordEl=document.getElementById('confirm-password')


function inputError(element,message){
    const formControl = element.parentElement;
    formControl.className='form-control error';
    const smallEl=formControl.querySelector('.error-message');
    smallEl.innerText = `Invalid ${message}`;
}

function inputSuccess(element){
    const formControl =element.parentElement;
    formControl.className ='form-control success'
}

formEl.addEventListener('submit',function(e){
    e.preventDefault();

    if(!usernameEl.value){
        inputError(usernameEl,'username')
}else{
    inputSuccess(usernameEl);
}
if(!emailEl.value){
    inputError(emailEl,'email')
}else{
inputSuccess(emailEl);
}
if(!passwordEl.value){
    inputError(passwordEl,'password')
}else{
inputSuccess(passwordEl);
}
if(!confirmpasswordEl.value){
    inputError(confirmpasswordEl,'confirm password')
}else{
inputSuccess(confirmpasswordEl);
}
})