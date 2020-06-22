// console.log("hello from utils.js")

// // const name = 'Mike'

// const add = function(a,b){
//     return a+b
// }

// module.exports = add

// const name = require('./utils.js')
// const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
//using utils.js and adding two numbers
// const sum = name(3,4)
// console.log(sum)

//using getNotes() from notes.js
// console.log(getNotes())

//using validator from npm module {used 'npm init' to config proj to npm module}
// console.log('varid@verma.com', validator.isEmail('varid@verma.com'))
// console.log('varid.verma.com', validator.isURL('varid.verma.com'))

//-----------------------------IMPORTANT NOTES----------------------------------------------------------------------------------------
//there are local as well as global dependencies.
//local dependencies are installed and recoreded in package.json and package-lock.json. Command used - 'npm install <pacagekName>'
//packages : validator, chalk are installed locally, so we don't have seperate command for it in terminal
//global dependencies are installed in the OS of the system and not in the package.json. Command used - 'npm install <packageName> -g'
//packages: nodemon is installed globally so it has command 'nodemon' from the terminal issued by the OS
//-----------------------------IMPORTANT NOTES----------------------------------------------------------------------------------------


//-------------------------Demo practice for chalk libraries---------------------------------------
// console.log(chalk.green.bgRed.bold('console log written in green using chalk package'))
// console.log(chalk.green.bgRed('console log written in green using chalk package'))
// console.log(chalk.bgMagenta('Success msg written in bgMagenta using chalk'))
// console.log(chalk.italic('msg written in italic'))
// console.log(chalk.green.bold('Hi, I am a green Line'+ chalk.underline.red(' which becomes red ') + 'and turns to green again'))
// console.log(chalk.blue.inverse.bold('Varid'))


//Process-> argv gives the command line args which are passed while running the program [0]-node [1]-prog name [2]onwards - user added values
// console.log(process.argv[2])

// const opr = process.argv[2]
// if(opr === 'add'){
//     console.log(chalk.inverse.green('Adding Notes ...'))
// }else if (opr === 'remove'){
//     console.log(chalk.red.inverse('Removing Notes ...'))
// }

// console.log(yargs.argv)node 

//customise yargs version
yargs.version('1.0.1')

//create add command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    handler: function(){
        console.log('Adding a new note')
    }
})