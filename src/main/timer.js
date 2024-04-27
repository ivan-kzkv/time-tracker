import {app, BrowserWindow, Menu} from "electron";
import path from "path";
import {MessageAPIService} from "./MessageAPI.service";
import {HttpClient} from "./HttpClient";
import {BasicTimer} from "./BasicTimer";

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
            titleBarStyle: 'hidden',
            webPreferences: {
                worldSafeExecuteJavaScript: true,
                preload: path.join(app.getAppPath(), 'preload', 'index.js')
            }
        })

        this.window.loadFile('renderer/index.html')

        this.window.on('closed', () => {
            this.window = null
        })
        if (CONFIG.devTools) {
            this.window.webContents.openDevTools({mode: 'detach'});
        }
    }
    
    createApp = () => {
        
        app.whenReady().then(() => {
            new MessageAPIService(new HttpClient());
            this.createWindow();
            const timer = new BasicTimer(this.window);
            this.window.webContents.on('did-finish-load', () => timer.stopTimer())
        });

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
