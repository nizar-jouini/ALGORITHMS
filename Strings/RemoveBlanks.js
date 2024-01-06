// Function that, given a string, returns all of that string’s contents, but without blanks
function removeBlanks(inputString) {
    // Check if the input is a string
    if (typeof inputString !== 'string') {
      console.log("Input is not a string.");
      return;
    }
  
    // Use regular expression to remove blanks
    const stringWithoutBlanks = inputString.replace(/\s/g, '');
  
    // Print the modified string
    console.log("String without blanks:", stringWithoutBlanks);
  
    return stringWithoutBlanks;
  }
  
  // Example usage:
  const inputString = "Pl ayTha tF u nkyM usi c ";
  removeBlanks(inputString);
  