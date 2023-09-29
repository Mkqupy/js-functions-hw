// 1
function logItems(array){
    for (let i = 0; i < array.length; i++){
        const item = array[i];
        console.log(`${i + 1} - ${item}`);
    }
}

const names = ['Mango', 'Poly', 'Ajax'];
logItems(names);


// 2
function calculateEngravingPrice(engraving, pricePerWord) {
    const howWords = engraving.split(' '); 
    const wordCounted = howWords.length;
    const totalPrice = wordCounted * pricePerWord;
    return totalPrice;
  }
  
  const engraving = "Якщо ви загубились, ідіть додому";
  const pricePerWord = 1;
  const totalPrice = calculateEngravingPrice(engraving, pricePerWord);
  console.log(`Вартість вашого гравіювання: ${totalPrice} грн`);
  

// 3
function findLongestWord(string) {
    const words = string.split(' ');
    let theLongestWord = '';
    for (const word of words) {
      if (word.length > theLongestWord.length) {
        theLongestWord = word;
      }
    }
  
    return theLongestWord;
  }
  const inputString = "Юлька може і крала гроши, але і людям давала красти і жили нормальна, а зараз зубажиння";
  const theLongestWord = findLongestWord(inputString);
  console.log(`Найдовше слово: ${theLongestWord}`);
  

// 4
function formatString (string) {
    const maxLength = 40;
  
    if (string.length <= maxLength) {
      return string;
    } else {
      const truncatedString = string.slice(0, maxLength) + '...';
      return truncatedString;
    }
  }
  
  const inputStr = "Це дууууууууууууууууууууууууууууууууууже довгий рядок";
  const formattedStr = formatString(inputStr);
  console.log(formattedStr);
  


// 5
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
      if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
      return true;
    } else {
      return false;
    }
  }
  
  const message1 = "Sale-90%!";
  console.log(checkForSpam(message1));
  


// 6
const numbers = [];
let input;

while (true) {
  input = prompt('Введіть число:');
  if (input === null) {
    break; 
  }
  input = Number(input); 
  if (!isNaN(input)) {
    numbers.push(input);
  } else {
    alert('Будь ласка, введіть коректне число.');
  }
}

let total = 0;

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Ви не ввели жодного числа.');
}
