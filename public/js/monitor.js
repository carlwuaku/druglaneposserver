const path = require('path');
const osu = require('node-os-utils');
const cpu = osu.cpu;
const mem = osu.mem;
const os = osu.os;

let cpuOverload = 50;
let alertFrequency = 1;


notifyUser({
    title: 'cpu overload',
    body: `CPU is over ${cpuOverload}%`
})

//run every 2 seconds
setInterval(()=>{
    //set cpu usage
    cpu.usage().then(info => {
        document.getElementById('cpu-usage').innerText = info +'%'
        document.getElementById('cpu-progress').style.width = info+'%'
        //make progress red if overload
        if(info >= cpuOverload){
            
            document.getElementById('cpu-progress').style.background = 'red'
        }
        else{
            document.getElementById('cpu-progress').style.background = '#30c88b'

        }
        if(info >= cpuOverload && runNotify(alertFrequency)){
            notifyUser({
                title: 'cpu overload',
                body: `CPU is over ${cpuOverload}%`,
                icon: path.join(__dirname,'assets','img', 'icon.png')
            });
            localStorage.setItem('lastNotify', +new Date())
        }

    });

    cpu.free().then(info => {
        document.getElementById('cpu-free').innerText = info +'%'
    })
    //uptime
    document.getElementById('sys-uptime').innerText = secondsToDhms(os.uptime())
}, 2000)


//set model
document.getElementById("cpu-model").innerText = cpu.model();
//computer name
document.getElementById('comp-name').innerText = os.hostname();
//os
document.getElementById('os').innerText = `${os.type()} ${os.arch()}`

//memory
mem.info().then(info => {
    document.getElementById('mem-total').innerText = info.totalMemMb;
});

//

function secondsToDhms(seconds){
    seconds = +seconds;
    const d = Math.floor(seconds/ (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600)/60);
    const s = Math.floor(seconds%60);
    return `${d}d, ${h}h ${m}m ${s}s`
}

function notifyUser(options){
    new Notification(options.title, options)
}

//check how much time has passed since last notification
function runNotify(frequency){
    if(localStorage.getItem('lastNotify') == null){
        //store timestamp
        localStorage.setItem('lastNotify', +new Date());
        return true;
    }

    const notifyTime = new Date(parseInt(localStorage.getItem('lastNotify')))
    const now = new Date()
    const diff = Math.abs(now - notifyTime)
    const minutesPassed = Math.ceil(diff/ (1000 * 60))
    if(minutesPassed > frequency){
        return true;
    }
    else{
        return false;
    }
}

