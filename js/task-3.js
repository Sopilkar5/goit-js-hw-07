const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const heading = nameOutput.closest('h1');

nameInput.classList.add('name-style');
heading.classList.add('heading-style');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
