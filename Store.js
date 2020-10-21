const electron = require('electron');
const path = require('path')
const fs = require('fs');
const constants = require('./constants');
class Store{
    constructor(options){
        //path to save to. the remote.app comes in if we call the api from render
        const userDataPath = (electron.app || electron.remote.app).getPath('userData');
        this.path = constants.settings_path
        this.data = parseDataFile(this.path, options.defaults);
        
    } 

  

    get(key){
        return this.data[key]
    }

    set(key, val){
        this.data[key] = val;
        fs.writeFileSync(this.path, JSON.stringify(this.data))
    }
}

function parseDataFile(filePath, defaults){
    try {
        return JSON.parse(fs.readFileSync(filePath))
    } catch (error) {
        console.log(error)
        return defaults;
    }
}

module.exports = Store;