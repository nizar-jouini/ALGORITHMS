// Function to insert a value at the beginning of an array
function pushFront(arr, value) {
    // Shift elements to the right to make space for the new value
    for (let i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
  
    // Insert the new value at the beginning
    arr[0] = value;
  
    // Return the modified array
    return arr;
  }
  
  // Example usage:
  const myArray = [2, 3, 4, 5];
  const newValue = 1;
  
  // Call the function to insert the value at the beginning of the array
  const resultArray = pushFront(myArray, newValue);
  
  // Log the result
  console.log(resultArray);
  