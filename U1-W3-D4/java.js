const tabellone = document.getElementById('tabellone');
const estraiButton = document.getElementById('estrai');
const numeriEstratti = [];

// genera il tabellone
for (let i = 1; i <= 76; i++) {
  const row = Math.floor((i - 1) / 13);
  const col = (i - 1) % 13;
  if (col === 0) {
    const tr = document.createElement('tr');
    tabellone.appendChild(tr);
  }
  const td = document.createElement('td');
  td.textContent = i;
  tabellone.children[row].appendChild(td);
}

// funzione per estrarre un numero
function estraiNumero() {
  const numero = Math.floor(Math.random() * 76) + 1;
  if (numeriEstratti.includes(numero)) {
    estraiNumero(); // ripeti se il numero è già stato estratto
  } else {
    numeriEstratti.push(numero);
    const celle = tabellone.getElementsByTagName('td');
    for (let i = 0; i < celle.length; i++) {
      if (parseInt(celle[i].textContent) === numero) {
        celle[i].classList.add('estratto');
      }
    }
  }
}

// evento click sul bottone
estraiButton.addEventListener('click', estraiNumero);
