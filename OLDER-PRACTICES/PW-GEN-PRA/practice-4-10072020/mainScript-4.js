// Retrieve the DOM elements
const formEl = document.getElementById("passwordGeneratorForm");
const passwordDisplayEl = document.getElementById("passwordDisplay");
const rangeEl = document.getElementById("characterAmountRange");
const counterEl = document.getElementById("characterAmountNumber");
const upperEl = document.getElementById("includeUppercase");
const numbersEl = document.getElementById("includeNumbers");
const symbolsEl = document.getElementById("includeSymbols");

// Sync the range and the counter values // Add "input-event" listeners to grab user input
rangeEl.addEventListener("input", syncRangeAndCounter);
counterEl.addEventListener("input", syncRangeAndCounter);
function syncRangeAndCounter(e) {
  rangeEl.value = e.target.value;
  counterEl.value = e.target.value;
}

// Create a function and loop to process ASCii characters
function asciiStartAndEnd(start, end) {
  let asciiRetrieve = [];
  for(i= start; i <= end; i++) {
    asciiRetrieve.push(i);
  }
  return asciiRetrieve;
}


// Retrieve ASCII characters to process
const lowerAscii = asciiStartAndEnd(97, 122);
const upperAscii = asciiStartAndEnd(65, 90);
const numbersAscii = asciiStartAndEnd(48, 57);
const symbolsAscii = asciiStartAndEnd(33, 47).concat(asciiStartAndEnd(58, 64)).concat(asciiStartAndEnd(91, 96)).concat(asciiStartAndEnd(123, 126));

// Create submit-event to the form
formEl.addEventListener("submit", function(e) {
  e.preventDefault();
  const rangeCounterAmount = counterEl.value;
  const uppercaseChecked = upperEl.checked;
  const numbersChecked = numbersEl.checked;
  const symbolsChecked = symbolsEl.checked;
  const password = generatePassword(rangeCounterAmount, uppercaseChecked, numbersChecked, symbolsChecked);
  console.log(password)
  passwordDisplayEl.innerText = password;
})

// Create generate function
function generatePassword(rangeCounterAmount, uppercaseChecked, numbersChecked, symbolsChecked) {
  let asciiCodes = lowerAscii;
  if(uppercaseChecked) {asciiCodes = asciiCodes.concat(upperAscii); }
  if(numbersChecked) {asciiCodes = asciiCodes.concat(numbersAscii); }
  if(symbolsChecked) {asciiCodes = asciiCodes.concat(symbolsAscii); }

  const passwordCharacters = [];
  for (i= 0; i < rangeCounterAmount; i++) {
    let asciiRandomize = asciiCodes[Math.floor(Math.random() * asciiCodes.length)]
    passwordCharacters.push(String.fromCharCode(asciiRandomize))
  }
return passwordCharacters.join("");
}


// TODO: Reference ASCII Values
// UC: 65, 90  |  LC: 97, 122 |  Num: 48, 57 | (Sym: 33, 47  &&  58, 64  &&  91, 96  &&  123, 126  )