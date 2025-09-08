const {argv} = require('node:process');

function add(a, b) {
    return a + b;
}
if (argv.length < 4 || isNaN(parseInt(argv[2])) || isNaN(parseInt(argv[3]))) {
    console.log('NaN');
}else {
    console.log(add(parseInt(argv[2]), parseInt(argv[3])));
}