import { app, BrowserWindow } from 'electron';

// Utilities.
import { createWindow, onActivate, onAllWindowsClosed } from './utils/systemUtils';

let mainWindow: BrowserWindow | null = null;

app.on('activate', () => onActivate(mainWindow));
app.on('ready', () => mainWindow = createWindow());
app.on('window-all-closed', () => onAllWindowsClosed(app));
