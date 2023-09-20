
import { mealsRow } from "./home.js";


export function displayContact(){
    mealsRow.innerHTML = `
    <div class="contact min-vh-100 d-flex justify-content-center">
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="mb-3">
                <input type="text" id="nameInput" class="form-control"  placeholder="Enter Your Name">
                </div>
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 text-center d-none">
                Special characters and numbers are not allowed.
                </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3">
                <input type="email" id="emailInput" class="form-control" placeholder="Enter Your Email">
                </div>
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 text-center d-none">
                Email not valid *exemple@yyy.zzz
                </div>
        </div>
    </div>


    <div class="row justify-content-center my-3">
        <div class="col-md-4">
            <div class="mb-3">
                <input type="text" id="phoneInput" class="form-control" placeholder="Enter your Phone">
                </div>
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 text-center d-none">
                Enter valid Phone Number
                </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3">
                <input type="number" id="ageInput" class="form-control" placeholder="Enter Your Age">
                </div>
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 text-center d-none">
                Enter valid Age.
                </div>
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="mb-3">
                <input type="password" id="passwordInput" class="form-control" placeholder="Enter Your Password">
                </div>
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 text-center d-none">
                Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3">
                <input type="password" id="repasswordInput" class="form-control" placeholder="Repassword">
                </div>
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 text-center d-none">
                Enter valid repassword
                </div>
        </div>
    </div>
                <div class="text-center">
                    <button id="button" class="btn btn-danger disabled">Submit</button>
                </div>
 </div>
</div>`




let nameInput = document.getElementById('nameInput')
const nameRegex = /^[a-zA-Z ]+$/
nameInput.addEventListener('input' , function(){
    let nameAlert = document.getElementById('nameAlert')
    if (nameRegex.test(nameInput.value) == true) {
        nameAlert.classList.replace('d-block','d-none')
        return nameRegex.test(nameInput.value)
    }
    else{
        nameAlert.classList.replace('d-none','d-block')
        // console.log('false');
    }
})


let emailInput = document.getElementById('emailInput')
const emailRegex = /^[a-z][a-z0-9]*@[a-z]+\.com$/

emailInput.addEventListener('input',  function(){
    let emailAlert = document.getElementById('emailAlert')
    if (emailRegex.test(emailInput.value) == true) {
        emailAlert.classList.replace('d-block','d-none')
        return true
    }
    else{
        emailAlert.classList.replace('d-none','d-block')
    }
})

let phoneInput = document.getElementById('phoneInput')
const phoneRegex = /^(?:(?:\+|00)20|0)?1\d{9}$/

phoneInput.addEventListener('input' , function(){
    let phoneAlert = document.getElementById('phoneAlert')
    if (phoneRegex.test(phoneInput.value) == true) {
        phoneAlert.classList.replace('d-block','d-none')
        return true
    }
    else{
        phoneAlert.classList.replace('d-none','d-block')
    }
})

let ageInput = document.getElementById('ageInput')

ageInput.addEventListener('input' , function(){
    let ageAlert = document.getElementById('ageAlert')
    if (ageInput.value<=0) {
        ageAlert.classList.replace('d-none','d-block')
        return true
    }
    else{
        ageAlert.classList.replace('d-block','d-none')
    }
})

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let passwordInput = document.getElementById('passwordInput')
passwordInput.addEventListener('input' , function(){
    let passwordAlert = document.getElementById('passwordAlert')
    if (passwordRegex.test(passwordInput.value) == true) {
        passwordAlert.classList.replace('d-block','d-none')
        return true
    }
    else{
        passwordAlert.classList.replace('d-none','d-block')
    }
    
})


let repasswordInput = document.getElementById('repasswordInput')
let submit = document.getElementById('button')
repasswordInput.addEventListener('input' , function(){
    let repasswordAlert = document.getElementById('repasswordAlert')
    if (repasswordInput.value == passwordInput.value) {
        repasswordAlert.classList.replace('d-block','d-none')
        submit.classList.remove('disabled')
    }
    else{
        repasswordAlert.classList.replace('d-none','d-block')
    }
})

}



