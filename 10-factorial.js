const { argv } = require('node:process');

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

if (argv.length < 3) {
  console.log('1');
}
else {
    const num = parseInt(argv[2]);
    console.log(num);
}