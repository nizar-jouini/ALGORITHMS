// Function that, given a string, returns the string’s acronym (first letter of the word capitalized)
function acronym(inputString) {
    // Check if the input is a string
    if (typeof inputString !== 'string') {
      console.log("Input is not a string.");
      return;
    }
    
    // Function to capitalize the first letter of a word
    function capitalizeFirstLetter(word) {
        const firstLetterCode = word.charCodeAt(0);
        // Check if the first letter is a lowercase letter
        if (firstLetterCode >= 97 && firstLetterCode <= 122) {
        // Convert to uppercase using ASCII codes
        return String.fromCharCode(firstLetterCode - 32);
        }
        return word[0];
    }

    let result = '';
  
    // Split the string into words
    const words = inputString.split(/\s+/);
  
    // Extract the first letter of each word and build the acronym
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            result += capitalizeFirstLetter(words[i]);
        }
    }
  
    // Print the acronym
    console.log("Acronym:", result);
  
    return result;
  }
  
  // Example usage:
  const inputString = " *- -- / there's no free lunch - gotta pay yer way.";
  acronym(inputString);
  