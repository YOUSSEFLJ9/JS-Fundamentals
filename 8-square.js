const {argv} = require('node:process');

if ( isNaN(parseInt(argv[2]))) {

console.log('Missing size');
}else {
    const size = parseInt(argv[2]);
    for (let i = 0; i < parseInt(argv[2]); i++) {
        for (let j = 0; j < parseInt(argv[2]); j++) {
            process.stdout.write('X');
        }
        console.log();
    } 
}