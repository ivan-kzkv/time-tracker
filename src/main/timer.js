import {app, BrowserWindow} from "electron";
import path from "path";

export class TimerApp {


    constructor() {
        this.createApp();
    }
    
    
    createWindow = () => {
        let win = new BrowserWindow({
            title: CONFIG.name,
            width: CONFIG.width,
            height: CONFIG.height,
            webPreferences: {
                worldSafeExecuteJavaScript: true,
                preload: path.join(app.getAppPath(), 'preload', 'index.js')
            }
        })

        win.loadFile('renderer/index.html')

        win.webContents.on('did-finish-load', () => {
            win.webContents.send('loaded', {
                appName: CONFIG.name,
                electronVersion: process.versions.electron,
                nodeVersion: process.versions.node,
                chromiumVersion: process.versions.chrome
            })
        })

        win.on('closed', () => {
            win = null
        })
        if (CONFIG.devTools) {
            win.webContents.openDevTools({mode: 'detach'});
        }
    }
    
    createApp = () => {
        
        app.whenReady().then(this.createWindow)

        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        })

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow();
            }
        })
    }
    
}
