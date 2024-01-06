// Function to remove and return the value at the beginning of an array
function popFront(arr) {
    if (arr.length === 0) {
      console.log("Array is empty. Cannot remove an element.");
      return undefined;
    }
  
    // Get the first element
    const firstElement = arr[0];
  
    // Shift all elements to the left
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    // Shorten the array by one to remove the last element
    arr.length--;
  
    // Print the removed value
    console.log("Removed value:", firstElement);
  
    return firstElement;
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const removedValue = popFront(myArray);
  
  // Print the modified array
  console.log("Modified array:", myArray);
  