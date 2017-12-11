console.log('Starting myNotes.js');

const fs = require('fs');

var fetchNotes = () => {
	// load file
	try {
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);	
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	// convert notes obj to string and write into notes-data
};

var addNote = (title, body) => {
	// console.log('Adding note', title, body);
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	// var duplicateNotes = notes.filter((note) => {
	// 	return duplicateNotes.title = title;
	// });

	var duplicateNotes = notes.filter((note) => note.title === title);
	// arrow function to filter duplicate notes in the notes array used with lodash

	// write to file
	if (duplicateNotes.length === 0) {
		notes.push(note); // add a single note into notes arr
		saveNotes(notes);
		return note;
	}
	
};

var getAll = () => {
	console.log('Getting all notes');
};

var read = (title) => {
	console.log('Reading notes', title);
};

var remove = (title) => {
	console.log('Remove a note', title);
};

module.exports = {
	addNote,
	getAll,
	read,
	remove
};



















// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return 'New Note';
// };

// module.exports.add = (a, b) => {
// 	return a + b;
// };

