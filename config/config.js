const path = require('path');
const home = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
const fs = require("fs");
const folder_path =  path.join( home,'DruglaneServer');
if (fs.existsSync(folder_path)) {
  console.log("folder exists")
}
else{
  console.log("folder not found")
  fs.mkdirSync(folder_path);
  
}

const db_location = path.join( folder_path,'sequelize_druglane.db');

console.log(db_location)
module.exports = {
    test: {
       
        storage: db_location,
        dialect: 'sqlite',
        logging: console.log,
        seederStorage: "sequelize",
    },
    development: {
       
      storage: db_location,
      dialect: 'sqlite',
      logging: console.log,
      seederStorage: "sequelize",

  },
  production: {
       
    storage: db_location,
    dialect: 'sqlite',
    logging: console.log,
    seederStorage: "sequelize",

}
};


