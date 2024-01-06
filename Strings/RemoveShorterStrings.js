// Function that, given an array of strings and a numerical value,
//    returns an array that only contains strings longer than or equal to the given value
function removeShorterStrings(arrayOfStrings, minLength) {
    // Check if the input is an array
    if (!Array.isArray(arrayOfStrings)) {
      console.log("Input is not an array.");
      return;
    }
  
    const filteredArray = [];
  
    // Iterate through the array and include only strings longer than or equal to minLength
    for (let i = 0; i < arrayOfStrings.length; i++) {
      const currentString = arrayOfStrings[i];
  
      // Check if the element is a string and meets the length condition
      if (typeof currentString === 'string' && currentString.length >= minLength) {
        filteredArray.push(currentString);
      }
    }
  
    // Print the filtered array
    console.log("Filtered array:", filteredArray);
  
    return filteredArray;
  }
  
  // Example usage:
  const stringsArray = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'];
  const minLength = 4
  removeShorterStrings(stringsArray, minLength);
  