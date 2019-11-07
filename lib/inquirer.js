const inquirer = require('inquirer');
const files = require('./files');



var rutaPrincipal="generator/";

module.exports = {
  askNombreArchivos: () => {
    const questions = [
      {
        name: 'entidad',
        type: 'input',
        message: 'Ingrese en nombre de la entidad por ejemplo persona,usuario:',
        validate: function( value ) {
          if (value.length) {
           // console.log(this.value);
           // generaCarpetaEntidad(value);            
            return true;
          } else {
            return 'ingrese el nombre por favor.';
          }
        }
      }

     
    ];
   
    return inquirer.prompt(questions);
  },

};

