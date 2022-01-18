let alarms = process.argv.slice(2);

console.log(alarms);


// solition 1
// using a loop


for (let i = 0; i < alarms.length; i++) {
  if (!isNaN(alarms[i]) && alarms[i] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarms[i]);
  }
}


// solution 2
// using forEach()


alarms.forEach(alarm => {
  if (!isNaN(alarm) && alarm > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarm);
  }
});


