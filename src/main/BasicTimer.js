import {ipcMain} from "electron";

export class BasicTimer {
    constructor(window) {
        this.window = window;
        this.time = 0;
        ipcMain.handle('startTimer', () => {
            this.startTimer();
        });
        ipcMain.handle('stopTimer', () => {
            const result = this.time;
            this.stopTimer();
            return result;
        })
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.time++;
            this.window.webContents.send('ping-timer', this.time);
        }, 1000);
    }
    
    stopTimer() {
        clearInterval(this.timer);
        this.time = 0;
    }
}
