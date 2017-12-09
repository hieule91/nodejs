console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Jack'));

var filterArray = ._uniq(['Jack', 1, 'Jack', 1, 2, 3, 4]);
console.log();


// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '');

// fs.appendFile('greetings.txt', `Hello ${user.username}!`);

// fs.appendFileSync('greetings.txt', 'Hello World');
// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return 'New note';
// };

// console.log('Process', process.argv);