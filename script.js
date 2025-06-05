function firstNonRepeatedChar(str) {
 // Write your code here
	let n = str.length
	for (let i = 0; i < n; i++) {
		let found = false
		for (let j = 0; j < n; j++) {
			if (i !== j && str[i] === str[j]) {
				found = true
				break
			}
		}
		if (!found) return s[i];
	}
	return '$'
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
