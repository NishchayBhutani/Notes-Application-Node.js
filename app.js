const chalk = require('chalk')
const { describe, argv } = require('yargs')
const yargs = require('yargs')
const { readNote } = require('./notes')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note data',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lists out existing commands',
    handler(argv) {
        notes.listNotes()
    }
})

//Create reading command
yargs.command({
    command: 'read',
    describe: 'Reads out existing notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv) {
        readNote(argv.title)
    }
})

yargs.parse();
// console.log(yargs.argv)