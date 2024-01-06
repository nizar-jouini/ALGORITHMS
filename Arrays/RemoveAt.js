// Function to remove and return the array value at that index
function removeAt(arr, index) {
    // Check if the index is within the array bounds
    if (index < 0 || index >= arr.length) {
      console.log("Index out of bounds. Cannot remove value.");
      return undefined;
    }
  
    // Get the value at the specified index
    const removedValue = arr[index];
  
    // Shift elements to the left starting from the removed index
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    // Shorten the array by one to remove the last element
    arr.length--;
  
    // Print the removed value
    console.log("Removed value:", removedValue);
  
    return removedValue;
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5];
  const removeIndex = 2;
  const removedValue = removeAt(myArray, removeIndex);
  
  // Print the modified array
  console.log("Modified array:", myArray);
  