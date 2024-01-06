// Function that, given a string, returns the number of non-space characters found in the string
function countNonSpaces(inputString) {
    // Check if the input is a string
    if (typeof inputString !== 'string') {
      console.log("Input is not a string.");
      return;
    }
  
    // Remove spaces from the string using regex and count the remaining characters
    const count = inputString.replace(/\s/g, '').length;
  
    // Print the count
    console.log("Number of non-space characters:", count);
  
    return count;
  }
  
  // Example usage:
  const inputString = "Honey pie, you are driving me crazy";
  countNonSpaces(inputString);
  