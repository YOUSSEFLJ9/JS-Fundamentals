const { argv } = require('node:process');
if (argv[2] && !isNaN(parseInt(argv[2]))) {
    console.log('My number: ' + parseInt(argv[2]));
}
else
{
    console.log('Not a number');
}