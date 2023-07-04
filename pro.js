window.alert("hello welcome to register");
const form= document.getElementsById('form');
const username= document.getElementsById('username');
const email= document.getElementsById('email');
const password= document.getElementsById('password');
const password2 = document.getElementsById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});
const setError=(element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const  setSuccess = element =>{
    const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');

     errorDisplay.innerText = '';
     inputControl.classList.add('success');
     inputControl.classList.remove('error');

};
const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue=username.value.trim();
    const emailValue =email.value.trim();
    const passwordValue =password.value.trim();
    const password2Value  =password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'username is required');
    }else{
        setSuccess(username);

    }
    if(emailValue===''){
        setError(email, 'email is required');


    }else if (!isValidEmail(emailValue)){
        setError(username, 'provide a email address');
    }else{
        setSuccess(email);


    }
    if (passwordValue === ''){
        setError(password,'password is required');
    }else if (passwordValue.Length < 8){
        setError(password,'It should be of atleast 8 characters.');
    }else{
        setSuccess(password);
    }
    if (password2Value === ''){
        setError(password2,'password is required');
    }else if (password2Value !== passwordValue){
        setError(password2,'doesnot match')
    }else{
        setSuccess(password2);
    }

    };

