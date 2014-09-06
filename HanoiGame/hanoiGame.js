var HanoiGame = function () {
  this.maxDepth = 3;
  this.stacks = [[3, 2, 1], [], []];
};

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

var run = function () {
  var game = new HanoiGame();  
};

module.exports = HanoiGame;