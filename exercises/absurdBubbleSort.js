"use strict";

var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfLessThan (el1, el2, callback) {
  // Prompt user to tell us whether el1 < el2; pass true back to the
  // callback if true; else false.
  reader.question(
    "Is " + el1 + " less than " + el2 + "?(y/n)",
    function (answer) {
      callback (answer === "y" ? true : false);
    }
  );
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1){
    askIfLessThan(arr[i], arr[i + 1], function(inOrder) {
      if(!inOrder) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop (arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i === (arr.length - 1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
  
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if(madeAnySwaps) {
      innerBubbleSortLoop (arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}


var run = function () {
  absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });
};

var testAskIfLessThan = function () {
  askIfLessThan(1,2, function(x) {
    console.log(x);
    reader.close();
  });
};

var testInnerBubbleSortLoop = function () {
  var arr = [3, 2, 1];
  // function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  innerBubbleSortLoop (arr, 0, false, function() {
    console.log(arr);
  });
  
};

var testAll = function () {
  console.log(testAskIfLessThan());
  testInnerBubbleSortLoop();
};

//testAll();
run();