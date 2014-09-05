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

var run = function () {
  var game = new HanoiGame();  
};

// =============== Tests! 
var testIsWon = function (game){ 
  console.log("== isWon");
  console.log("ideally, false, then true");
  console.log(game.isWon());
  game.stacks = [[], [3, 2, 1], [] ];
  console.log(game.isWon());
};

var testIsValidMove = function (game) {
  console.log("== validMove");
  console.log("ideally: f, t, t, f, f");
  
  game.stacks = [[3], [2, 1], [] ];
  console.log(game.isValidMove(0, 1));
  console.log(game.isValidMove(1, 2));
  console.log(game.isValidMove(1, 0));
  console.log(game.isValidMove(2, 0));
  console.log(game.isValidMove(8, 0));
};

var testAll = function (){
  var game = new HanoiGame();
  testIsWon(game);
  testIsValidMove(game);
};

testAll();