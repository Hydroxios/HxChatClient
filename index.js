const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    icon: __dirname + "/res/icon.ico",
    title: "HxChat"
  })

  win.loadURL("http://62.4.23.107:1596/")
  win.setMenuBarVisibility(false)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})