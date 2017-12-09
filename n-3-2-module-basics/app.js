console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

// console.log(user); // print out my Mac user info

// Option 1 to throw away the error
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err) {
	if (err) {
		console.log('Unable to write to file');
	}
});

// // Option 2 to throw away the error
// fs.appendFileSync('greetings.txt', 'Hello World');
