const { argv } = require('node:process');

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

if (argv.length < 3) {
    console.log('1');
} else {
    const num = parseInt(argv[2]);
    
    // Handle invalid numbers (e.g. NaN or negative)
    if (isNaN(num) || num < 0) {
        console.log('Please provide a non-negative integer.');
    } else {
        console.log(factorial(num));
    }
}