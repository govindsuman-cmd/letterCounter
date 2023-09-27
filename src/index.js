// Use addEventListener to attach the function to the click event
document.getElementById("countButton").addEventListener("click", countLetters);

function countLetters() {
  // Get the input value
  var inputText = document.getElementById("inputText").value;

  // Call the countLetters function
  var temp = countLettersFunction(inputText);

  // Display the result
  document.getElementById("result").innerHTML = formatResult(temp);
}

function countLettersFunction(input) {
  // Create an object to store letter counts
  var letterCount = {};

  // Loop through each character in the input
  for (var i = 0; i < input.length; i++) {
    var char = input[i];

    // Check if the character is a letter
    if (letterCount[char]) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  }

  return letterCount;
}

function formatResult(letterCount) {
  // Format the result as a string
  var resultString = "Letter count: <br>";
  for (var letter in letterCount) {
    resultString += letter + ": " + letterCount[letter] + "<br>";
  }
  return resultString;
}
