const { spawn } = require('child_process');

const ls = spawn('C:/LP_Data/LP Tools/01. Table Builder/Builder/Table Builder.exe', ['-V', 'C:/LP_Data/LP Tools/01. Table Builder/input/KOK/DIALOG.KOK.TABLE.DEFINITION']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
