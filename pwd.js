module.exports = (done) => {
    done(process.cwd());
  };


// //Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line


// module.exports = function () {
//     process.stdin.on('data', (data) => {
//         const cmd = data.toString().trim(); //remove the newline
//           if(cmd === 'cwd'){
//               process.stdout.write(process.cwd());
//           }
//         process.stdout.write('\nprompt > ');
//       });
//   };