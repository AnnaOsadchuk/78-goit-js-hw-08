var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

const localState = localStorage.getItem('feedback-form-state');

if (localState) {
  const parsedLocalState = JSON.parse(localState);
  emailEl.value = parsedLocalState.email;
  messageEl.value = parsedLocalState.message;
}

formEl.addEventListener(
  'input',
  throttle(() => {
    const emailValue = emailEl.value;
    const messageValue = messageEl.value;
    const inputArray = {
      email: `${emailValue}`,
      message: `${messageValue}`,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputArray));
  }, 500)
);

buttonEl.addEventListener('click', event => {
  event.preventDefault();
  console.log(`email: ${emailEl.value}, message: ${messageEl.value}`);
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
});
