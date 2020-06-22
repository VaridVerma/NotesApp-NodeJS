const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

yargs.version('1.1.0')
//add, remove, list, read

//create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    // Creating CLI options --title and --body which are required option and of default type string
    // these are for add command only
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    // This is a handler function
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    } 
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List notes',    
    handler(){
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading Notes',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


//for seeing this property calling yargs is important and thus this console.log is required
// console.log(yargs.argv)     or
// we can use yargs.parse() also

yargs.parse()