let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
}

let button = document.getElementById('vai');
button.addEventListener('click', function () {

  let userName = (document.getElementById('name').value);
  document.getElementById('name-ticket').innerHTML = userName;
  let userLastName = (document.getElementById('lastname').value);
  document.getElementById('lastname-ticket').innerHTML = userLastName;
  let userAge = parseInt(document.getElementById('age').value);
  document.getElementById('age-ticket').innerHTML = userAge;
  let userKm = parseInt(document.getElementById('km').value);
  document.getElementById('km-ticket').innerHTML = userKm;
  let price = userKm * 0.21;
  let userExpense = 'value';
  if (isNaN(userKm) || isNaN(userAge)) {
    alert('ATTENZIONE! Il valore deve essere un numero')
  } else {
  }
  if (userAge < 18) {
    userExpense = price * 0.80;
  } else if (userAge > 65) {
    userExpense = price * 0.60;
  } else {
    userExpense = price;
  }
  document.getElementById('expense-ticket').innerHTML = userExpense.toFixed(2);
  document.getElementById('ticket').scrollIntoView({
    behavior: 'smooth'
  });



})