const electron = require("electron");
const {app, BrowserWindow}=electron;
let mainWindow=null;

app.whenReady().then(() => {
    mainWindow=new BrowserWindow({})
    mainWindow.loadFile('../renderer/index.html').then(() => {})
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
