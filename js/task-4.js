const form = document.querySelector('.login-form');
form.classList.add('form-login');

const labels = form.querySelectorAll('label');
labels.forEach(label => label.classList.add('form-label'));

const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
  input.classList.add('form-input');
  
  const originalPlaceholder = 'Type area';

  input.addEventListener('focus', () => {
    input.setAttribute('placeholder', originalPlaceholder); 
    input.classList.add('focused-input'); 
  });

  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      input.setAttribute('placeholder', ''); 
    }
    input.classList.remove('focused-input'); 
  });
});

const button = form.querySelector('button');
button.classList.add('form-button');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('Усі поля повинні бути заповнені');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData); 

  form.reset();
});
