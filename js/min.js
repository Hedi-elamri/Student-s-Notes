//récupére les valeurs des champs du formulaire
const fullName =document.querySelector('.fullName');
const dateOfBirth = document.querySelector('.dateOfBirth');
const gender = document.querySelector('select[name=gender]');
const task1 = document.querySelector('task1');
const task2 = document.querySelector('task2');
const task3 = document.querySelector('task3');
//recupérer les buttons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

function validateFullName(fullName){
    //check if the full name is required.
    if (!fullName){
        return "Full name is required.";
    }
    //check the length of the full name.
    if (fullName.length < 3 || fullName.length > 20) {
        return "Full name must be between 3 and 20 characters long";
    }
    //check the format of the full name.
    if (!/^[a-zA-Z]+$/.test(fullName)) {
        return "Full name must contain only letters and spaces.";
    }
    //if the full name passes all of the validation rules, return null.
    return null;
}
function validateDate(date) {
    //check if the date is required.
    if (!date) {
        return "Date is required"
    }
    //check the format of the date.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return "Date must be in the format YYYY-MM-DD.";
    }
    
}