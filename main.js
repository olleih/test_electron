const {app, BrowserWindow} = require('electron'); 
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 600,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            allowFileAccess: true 
        }
       
    });

    mainWindow.webContents.openDevTools();

    mainWindow.loadFile(path.join(__dirname,'viteandelectron', 'dist', 'index.html'));
}

app.whenReady().then(createMainWindow);


