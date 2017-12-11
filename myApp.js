console.log('Starting myApp.js');

// run "nodemon myApp.js"
// nodemon works just like "grunt serve"

const fs = require('fs'); // in nodejs lib
const os = require('os');

const _ = require('lodash'); // third party

const yargs = require('yargs'); // third party

const notes = require('./myNotes.js'); // new sub file in the same dir

const argv = yargs.argv;

// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(5, 6);
// console.log('a + b =', notes.add(5, 6));

// var user = os.userInfo();
// console.log(user);

// console.log(_.isString(true));
// console.log(_.isString('true'));

// var filteredArray = _.uniq(['Jack', 1, true, 1, 'Jack', true, true, 1 , 2, 'haha']); // [] for arr declaration
// console.log(filteredArray);

// in Terminal: press "node myApp.js argv[] --title "secrets 2""
// 				   vs "node myApp.js argv[] --title="secrets 2""

// var command = process.argv[2];
var command = argv._[0]; // same as the above

console.log('Command:', command);

// console.log('Process:', process.argv);

console.log('Yargs:', argv);

if (command === 'add') {
	// console.log('Adding new note');
	var note = notes.addNote(argv.title, argv.body);
	if (note === undefined) { // or if (note)
		console.log('The note is already in use!');
	} else {
		// console.log('A new note is created with', argv.title, argv.body);
		console.log(`A new note created with Title: ${note.title} and Body: ${note.body}`);
	}
} else if (command === 'list') {
	// console.log('Listing all notes');
	notes.getAll();	
} else if (command === 'read') {
	// console.log('Reading a note');
	notes.read(argv.title);
} else if (command === 'remove') {
	// console.log('Removing a note');
	var noteRemoved = notes.remove(argv.title);
	var message = noteRemoved ? 'Remove note successful' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not found');
}














// fs.appendFileSync('hello.txt', `Hello, ${user.username}!`);