import { App, BrowserWindow } from 'electron';
import { platform } from 'os';
import { join } from 'path';
import { format } from 'url';

const indexPath: string = join(__dirname, '..', '..', 'renderer', 'index.html');

/**
 * Should create a new window object using the web page stored in public.
 * @return an instance of the BrowserWindow.
 */
export function createWindow(): BrowserWindow {
    let mainWindow: BrowserWindow | null = new BrowserWindow();

    mainWindow.maximize();
    mainWindow.loadURL(format({
        pathname: indexPath,
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', () => mainWindow = null);

    return mainWindow;
}

/**
 * Called when app is activated from a minimized state.
 * @param mainWindow the main window object.
 */
export function onActivate(mainWindow: BrowserWindow | null) {
    if (mainWindow === null) {
        createWindow();
    }
}

/**
 * Called when all windows have been closed.
 * @param app an Electron app instance.
 */
export function onAllWindowsClosed(app: App) {
    if (platform() !== 'darwin') {
        app.quit();
    }
}
