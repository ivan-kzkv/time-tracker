import {app, BrowserWindow, Menu, dialog} from "electron";
import path from "path";

export class TimerApp {


    constructor() {
        this.createApp();
        this.createMainMenu();
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
    
    createMainMenu = () => {
        const TMPLT = Menu.buildFromTemplate([
            {
                label: app.name,
                submenu: [
                    { 
                        label: 'Create new Project',
                        click: () => {
                            // todo open modal to create new project for time tracker
                        }
                    },
                ]
            },
            {
                label: 'About',
                submenu: [
                    { role: 'about' },
                    { type: 'separator' },
                    { role: 'hide' },
                    { role: 'hideOthers' },
                    { role: 'unhide' },
                    { type: 'separator' },
                    { role: 'quit' }
                ]
            }
        ]);
        Menu.setApplicationMenu(TMPLT);
    }
}
