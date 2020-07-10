const {BrowserWindow} = require('electron');

class MainWindow extends BrowserWindow{
    constructor(file){
        super({
            height: 500,
            width: 800,
            show: false,
           opacity: 0.9,
            title: 'systop',
            icon: `${__dirname}/app/assets/logo.png`,
            webPreferences: {
                nodeIntegration: true
            }
        })

        this.loadFile(file)
    }
}

module.exports=MainWindow