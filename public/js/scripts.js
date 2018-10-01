$(document).foundation()

function errorColor() {
  const errors = document.querySelectorAll('.error');
  for (let i=0; i<errors.length; i++){
    errors[i].style.color = 'red';
  }
}
errorColor();
