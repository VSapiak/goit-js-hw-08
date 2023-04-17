var throttle = require('lodash.throttle');

const emailForm = document.querySelector('.feedback-form');
const emailInput = emailForm.querySelector('input[name="email"]');
const messageInput = emailForm.querySelector('textarea[name="message"]');
const FORM_KEY = "feedback-form-state";
const formObject = {};

emailForm.addEventListener('submit', clearFormSubmit);
emailForm.addEventListener('input', throttle(addTextInput, 500));
saveSubmitTextrea();


// // очищаємо форму, видаляємо з application
function clearFormSubmit(e) {
	e.preventDefault();
	e.target.reset()
	localStorage.removeItem(FORM_KEY);
};

// функція в яку получаємо значення, за збеерігаємо до application
 function addTextInput(e){
	formObject[e.target.name] = e.target.value;
	localStorage.setItem(FORM_KEY, JSON.stringify(formObject));
};

// function save elements and remove emelents of application
function saveSubmitTextrea() {
	 const saveElement = localStorage.getItem(FORM_KEY);
	 if(saveElement) {
		const dateEmelent = JSON.parse(saveElement);
		emailInput.value = dateEmelent.email;
		messageInput.value = dateEmelent.message;
	 }
};