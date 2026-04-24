// This program sums numbers passed as command-line arguments
// process.argv is an array that contains command-line arguments

// Start at index 2 because:
// index 0 = 'node'
// index 1 = file path
// index 2+ = actual numbers we want to sum
let sum=0;
for (let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum)