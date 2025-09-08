const { argv } = require('node:process');
if (argv.length < 3) {
  console.log('1');
}
else {
    let fact = 1;
    for (let i = 1; i <= parseInt(argv[2]); i++) {
        fact *= i;
    }
    console.log(fact);
}