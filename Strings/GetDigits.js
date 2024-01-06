// Function that given a string, returns the integer made from the string’s digits
function getDigits(inputString) {
    // Check if the input is a string
    if (typeof inputString !== 'string') {
      console.log("Input is not a string.");
      return;
    }
  
    // Extract digits using regular expression
    const digitsArray = inputString.match(/\d/g);
  
    // Check if there are any digits
    if (!digitsArray) {
      console.log("No digits found in the string.");
      return;
    }
  
    // Join the array of digits and convert to an integer
    const result = Number(digitsArray.join(''));
  
    // Print the result
    console.log("Integer made from the string's digits:", result);
  
    return result;
  }
  
  // Example usage:
  const stringWithDigits = "abc8c0d1ngd0j0!8";
  getDigits(stringWithDigits);
  