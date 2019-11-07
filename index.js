const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');


clear();

console.log(
  chalk.yellow(
    figlet.textSync('GridGen', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  
  const generate = await files.getCurrentDirectoryBase();
  const data = await inquirer.askNombreArchivos();
  generaCarpetaEntidad(data.entidad)
  //console.log(data.entidad);
};

run();

var generaCarpetaEntidad = function(name) {  
   console.log(files.rutaPrincipal+files.dirpages+"/"+name);
   if (!fs.existsSync(files.rutaPrincipal+files.dirpages+"/"+name)){
     fs.mkdirSync(files.rutaPrincipal+files.dirpages+"/"+name);
   }
 };