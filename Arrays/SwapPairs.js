// Function to Swap positions of successive pairs of values of given array.
//   If length is odd, do not change the final element.
function swapSuccessivePairs(arr) {
    // Determine the number of pairs to swap
    const numPairs = Math.floor(arr.length / 2) * 2;
  
    // Swap successive pairs
    for (let i = 0; i < numPairs; i += 2) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  
    // Print the modified array
    console.log("Modified array:", arr);
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 5, 6, 7];
  swapSuccessivePairs(myArray);
  