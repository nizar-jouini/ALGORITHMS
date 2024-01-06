// Function to insert a value into an array at given index
function insertAt(arr, index, value) {
    // Ensure the index is within the array bounds
    if (index < 0 || index > arr.length) {
      console.log("Index out of bounds. Cannot insert value.");
      return;
    }
  
    // Shift elements to the right starting from the end to make room for the new value
    for (let i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
  
    // Set the value at the specified index
    arr[index] = value;
  
    // Print the modified array
    console.log("Modified array:", arr);
  }
  
  // Example usage:
  const myArray = [1, 2, 4, 5];
  const insertIndex = 2;
  const newValue = 3;
  insertAt(myArray, insertIndex, newValue);
  