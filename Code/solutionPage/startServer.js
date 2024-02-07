// stellt die funktionalität etwas im terminal einzugeben von Node.js-Modul zu verfügung
function startNodeServer() {
   const { exec } = require('child_process');
    const serverPath = 'kw52/server.js';
    exec(`node ${serverPath}`);
}
/*startNodeServer();*/
