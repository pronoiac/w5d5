var HanoiGame = function () {
  this.maxDepth = 3;
  this.stacks = [[3, 2, 1], [], []];
};

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

HanoiGame.prototype.isWon = function () {
  // some methods: 
  // * a (non-index 0) stack has length of max_depth
  // * if all stacks but one are empty
  // * if stack 0 is empty and so is stack 1 or 2.
  for (var i = 1; i < this.stacks.length; ++i) {
    if (this.stacks[i].length === this.maxDepth) {
      return true;
    }
  }
  return false;
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  var srcStack = this.stacks[startTowerIdx];
  var dstStack = this.stacks[endTowerIdx];
  
  if (!srcStack || !dstStack || srcStack === []) {
    return false;
  }
  
  var srcDisc = srcStack[srcStack.length - 1];
  var dstDisc = dstStack[dstStack.length - 1];
  
  if (dstStack.length === 0 || srcDisc < dstDisc ) {
    return true;
  }

  return false;
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (!this.isValidMove(startTowerIdx, endTowerIdx)){
    return false;
  }
  var srcStack = this.stacks[startTowerIdx];
  var dstStack = this.stacks[endTowerIdx];
  
  dstStack.push(srcStack.pop());
  
  return true;
};

HanoiGame.prototype.print = function () {
  console.log("Stacks:");
  // [0, 1, 2].for (function (el) {
  for (var i = 0; i < this.stacks.length; i++) {
    console.log("  " + i + ": " + this.stacks[i]);
  }
};

HanoiGame.prototype.promptMove = function (callback) {

  
  this.print();
  
  reader.question("Move (from, to) e.g. '1, 2': ", function (answer) {
    var list = answer.split(",");
    var src = parseInt(list[0], 10);
    var dst = parseInt(list[1], 10);
    
    callback(src, dst);
  });
};

HanoiGame.prototype.run = function(completionCallback){
  var game = this;
  this.promptMove(function (startTowerIdx, endTowerIdx){
    if(!game.move(startTowerIdx,endTowerIdx)){
      console.log("Bad move");
    }
    
    if (game.isWon()){
      game.print();
      console.log("You win");
      completionCallback();
    } else {
      game.run(completionCallback);
    }
  });
};

var run = function () {
  game.run(function(){
    reader.close();
  });
};


var game = new HanoiGame();
run();

module.exports = HanoiGame;