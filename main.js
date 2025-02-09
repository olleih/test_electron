const {app, BrowserWindow} = require('electron'); 
const path = require('path');

const isDev = !app.isPackaged; 

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 600,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            allowFileAccess: true,
            contextIsolation: false,
        }
       
    });


    if (isDev) {
        mainWindow.loadURL('http://localhost:5173'); 
        mainWindow.webContents.openDevTools();
        console.log('devissä')
    } else {
        mainWindow.loadFile(path.join(__dirname, 'viteandelectron', 'dist', 'index.html')); 
    }
}

app.whenReady().then(createMainWindow);


