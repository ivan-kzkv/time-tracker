import {app, BrowserWindow, Menu, ipcMain} from "electron";
import path from "path";

export class TimerApp {


    constructor() {
        this.createApp();
        this.createMainMenu();
    }
    
    
    createWindow = () => {
        this.window = new BrowserWindow({
            title: CONFIG.name,
            width: CONFIG.width,
            height: CONFIG.height,
            webPreferences: {
                worldSafeExecuteJavaScript: true,
                preload: path.join(app.getAppPath(), 'preload', 'index.js')
            }
        })

        this.window.loadFile('renderer/index.html')

        this.window.webContents.on('did-finish-load', () => {
            this.window.webContents.send('loaded', {
                appName: CONFIG.name,
                electronVersion: process.versions.electron,
                nodeVersion: process.versions.node,
                chromiumVersion: process.versions.chrome
            })
        })

        this.window.on('closed', () => {
            this.window = null
        })
        if (CONFIG.devTools) {
            this.window.webContents.openDevTools({mode: 'detach'});
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
                            this.window.webContents.send('open-create-project-modal')
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
