
const fs = require('fs');
const dirPath = `output/push/src/main/java/com/vibrent/vxp/push`;


dirPath.split('/').forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, null);
  }
  process.chdir(dir);
});