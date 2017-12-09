console.log('Starting myApp.js');

const fs = require('fs');

const os = require('os');

const notes = require('./myNotes.js');

var res = notes.addNote();
console.log(res);

// var sum = notes.add(5, 6);
console.log('a + b =', notes.add(5, 6));

// var user = os.userInfo();
// console.log(user);

// fs.appendFileSync('hello.txt', `Hello, ${user.username}!`);