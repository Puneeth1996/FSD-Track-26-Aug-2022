const returnContactFormObject = (name, email, message, language) => ({ name, email, message, language });

// THe language used in the select field
const languagesArray = ['telugu', 'hindi', 'english'];

// SImple Email Validaiton Function
const validateFormObject = formObject => {
    let flag = true;
    // below validates the email
    if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(formObject.email))) return ('Not a valid Email!');
    // validation of message 
    if(formObject.message.length<20)  return ('Message Lenght is not sufficient!');
    return flag
};

// creating variables for the individual dom elements
var contactForm = document.getElementById('contact-us-form');
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var messageField = document.getElementById('message');
var languageSelection = document.getElementById('language');
var errorTag = document.getElementById('error-message');
var submitButton = document.getElementById('submit');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form Submission ... ')
    const contactObject = returnContactFormObject(nameField.value, emailField.value, messageField.value, language.value);
    let validate = validateFormObject(contactObject);
    console.log(validate);
    if (validate === true) {
        console.log('Form Submission in progress' );
        console.log(contactObject);
        errorTag.innerHTML = '';
        submitButton.disabled = true;
        submitButton.style.backgroundColor = '#782020';
        submitButton.innerHTML = 'Submitting...'
    }
    else {
        console.log('Not a valid Form input.')
        errorTag.innerHTML = validate;
    }
});

