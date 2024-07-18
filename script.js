function chunkString(str, length) {
    if (!str) return []; // Handle null or empty string input

    let result = [];
    for (let i = 0; i < str.length; i += length) {
        result.push(str.substring(i, i + length));
    }
    
    return result;
}

// Examples
console.log(chunkString("Hello, world!", 5)); // Output: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // Output: ["12", "34", "5"]
console.log(chunkString("abc", 5));           // Output: ["abc"]
console.log(chunkString("", 3));              // Output: []
console.log(chunkString(null, 4));            // Output: []
