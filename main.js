const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow () {
  const win = new BrowserWindow({
    title: 'Feliz Natal',
    icon: path.join(__dirname, 'assets/icon.jpg'),
    frame: false,
    width: 1200,
    transparent: true,
    resizable: false,
    draggable: true,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false
    }
  });

  win.loadFile(path.join(__dirname, 'views/inicio.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});