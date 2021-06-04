// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 14 - Readable Streams
// -------
// req the fs mod
const fs = require('fs');

// declare a variable that is assigned the value of...
// the encoded text content of readMe.txt
const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// fs.createReadStream() inherits from the events.EventEmitter()...
// the ability to listen for an event
// myReadStream.on() event listener listens for a data event...
// ea data event fires a cb function
// that takes a chunk of data from my myReadStream
// & con.logs a mssg, the actual data chunk & a line break
myReadStream.on('data', function(chunk){
    console.log('\nnew chunk received:\n');
    console.log(chunk);
    console.log('\n')
});