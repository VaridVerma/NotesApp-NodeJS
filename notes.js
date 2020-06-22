const fs = require('fs')
const chalk = require('chalk')

const getNotes= () => { 
    f
    return 'Your notes . . . ' 
}


const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function(note) {return note.title === title })
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
 
    if(duplicateNote === undefined){ //(!duplicateNote)
        notes.push({
            title: title,
            body:body
        })    
        saveNotes(notes)
        console.log(chalk.green.bold('New note added successfully...'))
    }else{
        console.log(chalk.red.bold('Note title already taken ... Try with new name'))
    }

}

const loadNotes= () => {
    try{
        const dataJSON = JSON.parse(fs.readFileSync('notes.json').toString())
        return dataJSON
    }catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter(function(note) { return note.title !== title  })

    if(notes.length === remainingNotes.length){
        console.log(chalk.red.bold('No notes found ...'))
    }else{
        saveNotes(remainingNotes)
        console.log(chalk.green.bold('Note removed succesfully ...'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.green("Your Notes : "))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title === title)
    if(searchNote !== undefined){
    console.log("Note : ",searchNote.title)
    console.log(searchNote.body)
    }else{
        console.log(chalk.red.inverse("No notes found for the given title ...."))
    }
}

module.exports = {  
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}