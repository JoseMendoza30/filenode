const fs = require('fs');
const path = require('path');


    const rutaPrincipal="generator/";
    const dirCore = '@core'; 
    const dirData = 'data'; 
    const dirServices = 'services';
    const dirpages = 'pages'; 

module.exports = {
 
  rutaPrincipal,
  dirCore,
  dirData,
  dirServices,
  dirpages,

  getCurrentDirectoryBase: () => {
 
    if (!fs.existsSync(rutaPrincipal+dirCore)){    
      fs.mkdirSync(rutaPrincipal+dirCore);
   }
   
   if (!fs.existsSync(rutaPrincipal+dirpages)){
     fs.mkdirSync(rutaPrincipal+dirpages);
   }
   
   if (!fs.existsSync(rutaPrincipal+dirCore+"/"+dirData)){
       fs.mkdirSync(rutaPrincipal+dirCore+"/"+dirData);
   }
   
   if (!fs.existsSync(rutaPrincipal+dirCore+"/"+dirServices)){
     fs.mkdirSync(rutaPrincipal+dirCore+"/"+dirServices);
   }
  }



};



/*var writeStream = fs.createWriteStream(rutaPrincipal+"JournalDEV.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.write("Thank You.");
writeStream.end();*/


 /*module.exports = {
 getCurrentDirectoryBase: () => {
   
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  }
}; */
