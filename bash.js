
const pwd = require('./pwd');
const ls= require('./ls')
const cat = require('./cat');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  };

process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(' ');
  const cmd = input[0];
  const arg = input[1];
    if(cmd ==='pwd'){
        pwd(done)
    }
  else if (cmd === 'ls') {
    ls(done)
  } else if (cmd === 'cat') {
    cat(arg);
  } else {
    console.log(`Command not recognized: ${cmd}`);
  }

  process.stdout.write('prompt > ');
});