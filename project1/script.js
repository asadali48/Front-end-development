const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//function to update the class and message for error
function showError(input, message){
    //Get the parent element of input field .form-control
    const formControl = input.parentElement;
    //Override the class and add error
    formControl.className = "form-control error";
    //Get the small element for error message
    const small = formControl.querySelector("small");
    //Override the text for small element using the input message
    small.innerText = message;
}

function showSuccess(input){
    //Get the parent element of input field .form-control
    const formControl = input.parentElement;
    //Override the class and add error
    formControl.className = "form-control success";
}

//Create event listener for submit button
form.addEventListener("submit", function(e){
    e.preventDefault() //stop page from reloading on submit
    console.log(username.value);

    //check if user input is empty
    if(username.value === ''){
        showError(username, "username is required");
    }
    else{
        showSuccess(username);
    }

    //check if email input is empty
    if(email.value === ''){
        showError(email, "Email is required");
    }
    else{
        showSuccess(email);
    }

    //check if password input is empty
    if(password.value === ''){
        showError(password, "password is required");
    }
    else{
        showSuccess(password);
    }

    //check if password2 input is empty
    if(password2.value === ''){
        showError(password2, "password2 is required");
    }
    else{
        showSuccess(password2);
    }
})