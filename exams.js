// Exercise 1
function printLettersWithPosition(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(`${str[i]}:${i}`);
  }
}

// Example usage
printLettersWithPosition("hello");

// Exercise 2
function printFormattedLettersWithPosition(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    output += `${str[i]}:${i}`;
    if (i < str.length - 1) {
      output += ", ";
    }
  }
  console.log(output);
}

// Example usage
printFormattedLettersWithPosition("hello");

// Exercise 3
function printLettersWithOddEvenFormat(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      output += `${str[i].toUpperCase()}:${i}`;
    } else {
      output += `, ${str[i].toUpperCase()}:${i}`;
    }
  }
  console.log(output);
}

// Example usage
printLettersWithOddEvenFormat("hello");
