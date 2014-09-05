var HanoiGame = function(){
  var maxDepth = 3;
  var stacks = [[3, 2, 1], [], []];
};

HanoiGame.prototype.isWon = function(){
  // some methods: 
  // * a (non-index 0) stack has length of max_depth
  // * if all stacks but one are empty
  // * if stack 0 is empty and so is stack 1 or 2.
  for(var i = 1; i < this.stacks.length; ++i) {
    if(this.stacks[i].length === this.maxDepth){
      return true;
    }
  }
  return false;
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx){
  if(startTowerIdx < 0 || startTowerIdx > 2 ||
    endTowerIdx < 0 || endTowerIdx > 2 ||
    this.stacks[startTowerIdx] === []
  ){
    return false;
  }
  
  if(this.stacks[endTowerIdx] === []) {
    // TODO: make move
    return true;
  }
  
  var src  = 
  var dest = 
};

var game = new HanoiGame();
