
let errorValidation = document.querySelector('#validation');
let txtPassword = document.getElementById('password');
let txtPasswordConfirm = document.getElementById('confirm-password');
let btnSubmit = document.getElementById('btnSubmit');
let myForm = document.getElementById('myForm');
/***************** Pruebas */

// txtPassword.textContent='';
// txtPasswordConfirm.textContent='';

/************************ */

errorValidation.classList.add('hidden');

myForm.addEventListener('submit', function(event) {

    let permiteSubida = validatePasswordInputs(txtPassword.value, txtPasswordConfirm.value);

    if(!permiteSubida){
        event.preventDefault();
        txtPassword.value='';
        txtPasswordConfirm.value='';
    }

})


function validatePasswordInputs(text1, text2){


    if(text1 != text2){
        errorValidation.classList.remove('hidden');
        return false;
    }
    else
    {
        errorValidation.classList.add('hidden');
        return true;
    }

}




