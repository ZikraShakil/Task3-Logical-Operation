const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getCommonElements(arr1, arr2) {
  let commonArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonArray.push(arr1[i]);
        break;
      }
    }
  }
  return commonArray;
}

// Prompt user for input for array1
rl.question('Enter elements for Array 1 (comma-separated): ', (inputArr1) => {
  const arr1 = inputArr1.split(',').map((item) => parseInt(item.trim()));

  // Prompt user for input for array2
  rl.question('Enter elements for Array 2 (comma-separated): ', (inputArr2) => {
    const arr2 = inputArr2.split(',').map((item) => parseInt(item.trim()));

    // Get common elements
    const commonElements = getCommonElements(arr1, arr2);

    // Display common elements
    console.log('Common Elements:', commonElements);

    // Close the readline interface
    rl.close();
  });
});

// Event handler for when the interface is closed
rl.on('close', () => {
  process.exit(0); // Exit the script
});
