// compilazione automatica testo

const dynamicText = document.querySelector("h1 span");
const words = ["Casa", "Scuola", "Il Lavoro", "L'Estero", "Il Mondo", "Ovunque"]

let wordIndex = 0;
let charIndex = 0;
let isDelecting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if (!isDelecting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDelecting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDelecting = !isDelecting;
    wordIndex = !isDelecting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
}

typeEffect();

// accordion pagina principale

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

// calcoli 

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
    alert ('ATTENZIONE! Il valore deve essere un numero')
    let disNn = document.getElementById('d-n');
    disNn.classList.add('d-none')
  } else {

  }
  if (userAge < 18) {
    userExpense = price * 0.80;
  } else if (userAge > 65) {
    userExpense = price * 0.60;
  } else {
    userExpense = price;
  }

  // carrozza e posto a sedere

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let trainNumber = getRndInteger(1000, 6000);
  let chairNumber = getRndInteger2(10, 100);
  document.getElementById('chair-ticket').innerHTML = chairNumber;
  document.getElementById('train-ticket').innerHTML = trainNumber;
  document.getElementById('expense-ticket').innerHTML = userExpense.toFixed(2);
  document.getElementById('ticket').scrollIntoView({
    behavior: 'smooth'
  });
})

