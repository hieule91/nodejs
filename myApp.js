console.log('Starting myApp.js');

// nodemon works just like "grunt serve"

const fs = require('fs'); // in nodejs lib
const os = require('os');

const _ = require('lodash'); // third party

const notes = require('./myNotes.js'); // new sub file in the same dir

// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(5, 6);
// console.log('a + b =', notes.add(5, 6));

// var user = os.userInfo();
// console.log(user);

// console.log(_.isString(true));
// console.log(_.isString('true'));

var filteredArray = _.uniq(['Jack', 1, true, 1, 'Jack', true, true, 1 , 2, 'haha']); // [] for arr declaration
console.log(filteredArray);

// fs.appendFileSync('hello.txt', `Hello, ${user.username}!`);