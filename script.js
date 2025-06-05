function firstNonRepeatedChar(str) {
 // Write your code here
  if (!str || str.length === 0) {
        return null;
    }
    
    // Count frequency of each character
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first character with count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // No non-repeated character found
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
