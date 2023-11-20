const nameInput = document.querySelector('[name="name"]');
const emailInput = document.querySelector('[name="email"]'); 

const formSubmit = event => {
    event.preventDefault();
    alert(`The form was submitted.`);
    for(let i = 0; i < 3;i++) {
        console.log(event.target[i].value);
    }
    
}

document.querySelector('form').addEventListener('submit', formSubmit);

const validateNameLength = event => {
    if(event.target.value.length < 2) {
        alert("Name not long enough");
        nameInput.focus();
    }
}

nameInput.addEventListener('change', validateNameLength);

const validateEmailFormat = event => {
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value))) {
        alert(`Email address not in a valid format`);
        emailInput.focus();
    }
}

emailInput.addEventListener('change', validateEmailFormat);