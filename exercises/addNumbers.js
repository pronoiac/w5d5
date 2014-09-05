var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function (sum, numsLeft, completionCallback) {
  // If numsLeft > 0, then:
  if(numsLeft > 0) {
    // Prompt the user for a number (use reader).
    reader.question("Next number: ", function (answer){
      // Pass a callback that:
      // Uses parseInt to parse the input.
      var input = parseInt(answer);
      
      // Increment the sum and console.log it.
      sum = sum + input;
      console.log ("Sum: " + sum.toString());
      
      // Recursively calls addNumbers again, passing in:
      //   the increased sum,
      //   the decreased numsLeft,
      //   and the same completionCallback.
      
    });
  };
  // If numsLeft == 0, call completionCallback(sum) so that the total sum can be used.
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
reader.setPrompt("Type something:", 16);
//console.log(
  reader.prompt(true);