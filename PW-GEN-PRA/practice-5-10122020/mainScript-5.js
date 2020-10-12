// Retrieve the DOM elements
const passwordGeneratorFormEl = document.getElementById("passwordGeneratorForm");
const passwordDisplayEl = document.getElementById("passwordDisplay");
const characterAmountRangeEl = document.getElementById("characterAmountRange");
const characterAmountNumberEl = document.getElementById("characterAmountNumber");
const includeUppercaseEl = document.getElementById("includeUppercase");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeSymbolsEl = document.getElementById("includeSymbols");

// Sync range value and counter value
characterAmountRangeEl.addEventListener("input", syncRangeAndCounter);
characterAmountNumberEl.addEventListener("input", syncRangeAndCounter);

function syncRangeAndCounter(e) {
  characterAmountRangeEl.value = e.target.value;
  characterAmountNumberEl.value = e.target.value;
}

// Loop process ASCII codes
function startAndEndAscii(start, end) {
  for(i = start; i <= end; i++) {
console.log(i);
//return i;
}
return i;
}

// Retrieve ASCII codes
const lowercaseAscii = startAndEndAscii(97, 122);
const uppercaseAscii = startAndEndAscii(65, 90);
const numbersAscii = startAndEndAscii(48, 57);
//let symbolsAscii = startAndEndAscii(33, 47).concat(startAndEndAscii(58, 64));

console.log(lowercaseAscii, uppercaseAscii, numbersAscii, );
// Create form submit event with generate password callback

// Create the generatePassword function

// TODO: Reference ASCII Values
// UC: 65, 90  |  LC: 97, 122 |  Num: 48, 57 | (Sym: 33, 47  &&  58, 64  &&  91, 96  &&  123, 126  )