// Function to do with given a sorted array, remove duplicate values.
function removeDuplicates(arr) {
    // Check if the array is empty or has only one element
    if (arr.length <= 1) {
      return arr;
    }
  
    // Initialize pointers
    let uniqueIndex = 0;
  
    // Iterate through the array
    for (let i = 1; i < arr.length; i++) {
      // Check for duplicates
      if (arr[i] !== arr[uniqueIndex]) {
        // Move unique values to the front of the array
        uniqueIndex++;
        arr[uniqueIndex] = arr[i];
      }
    }
  
    // Remove duplicates by shortening the array
    arr.length = uniqueIndex + 1;
  
    // Print the modified array
    console.log("Modified array:", arr);
  }
  
  // Example usage:
  const sortedArray = [1, 1, 2, 2, 3, 4, 4, 4, 5];
  removeDuplicates(sortedArray);
  