const email = document.querySelector('input');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');






btn.addEventListener('click', e => {
    e.preventDefault()
    checkInput();
    
    
})

function checkInput() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Please provide a valid email')
    } else if (!validEmail(emailValue)){
        setError(email,'Please provide a valid email')
    } else {
        setSucess(email)
    }
}



function setError(input, message) {
    const inputContainer = input.parentElement;
    const errorText = document.querySelector('.error-text');
    inputContainer.className = "input-container error";
    errorText.innerText = message;
}


function setSucess(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = "input-container"
}

function validEmail(email) {
    return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(email)
}