//Contact form validation 
const form = document.getElementById('contact');

//validate form function
const validateForm = () => {
form.setAttribute('novalidate', '');

//validation options objects array
const validationOptions = [
    //checks if someone has entered text into field
    {
        attribute: 'required',
        isValid: input => input.value.trim() !== '',
        errorMessage: (input, label) => `${label.textContent} is required`
    },
    {
        attribute: 'required',
        isValid: input => input.value.trim() !== null,
        errorMessage: (input, label) => `${label.textContent} is required`
    },
    {
        attribute: 'required',
        isValid: input => input.value.trim() !== undefined,
        errorMessage: (input, label) => `${label.textContent} is required`
    },
    {
        //checks email and phone number agaisnt pattern provided for valid email and phone number
        attribute: 'pattern',
        isValid: input => {
            const patternRegEx = new RegExp(input.pattern);
            return patternRegEx.test(input.value);
        },
        errorMessage: (input, label) => `Is Not a Valid ${label.textContent}`
    }
]

//unpacks arrary into variables and checks for errors in said feild
const validateformField = formfield => {
    const label = formfield.querySelector('label');
    const input = formfield.querySelector('input, textarea');
    const errorSpan = formfield.querySelector('.error-message');
    const errorIcon = formfield.querySelector('.icon-exclamation-circle');
    const successIcon = formfield.querySelector('.icon-check-circle');

    //checks agaisnt the vaildation options for errors
    let formFieldError = false;
    for (const option of validationOptions) {
        if(input.hasAttribute(option.attribute) && !option.isValid(input)) {
            input.style.borderColor = '#C52626';
            successIcon.classList.add('hidden');
            errorIcon.classList.remove('hidden');
            errorSpan.textContent = option.errorMessage(input, label);
            errorSpan.classList.remove('hidden');
            input.style.marginBottom = '0';
            formfield.style.marginBottom = '20px';
            formFieldError = true;
        }
    }

    // checks for no errors
    if (!formFieldError) {
        input.style.borderColor = '#2c2c2c';
        errorSpan.textContent = '';       
        successIcon.classList.remove('hidden');
        errorIcon.classList.add('hidden');
        errorSpan.classList.add('hidden');
        input.style.marginBottom = '20px';
        formfield.style.marginBottom = '0';
    }
    
    // spose to check for each element if the blur event is triggered
    Array.from(form.elements).forEach(element => {
    element.addEventListener('blur', (event) => {
        validateformField(event.srcElement.parentElement);
    });
});

};

//pulls each formfield into an array for each selector in formfield
const validateFormFields = formToValidate => {
    const formFields = Array.from(formToValidate.querySelectorAll('.form-field'))

    formFields.forEach(formField => {
        validateformField(formField);
    });
    
};

//when submitted check if errors found by validation function then stop submit.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateFormFields(form);
    });

};

validateForm();