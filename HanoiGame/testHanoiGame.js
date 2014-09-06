var HanoiGame = require('./hanoiGame.js');

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

var testMove = function (game) {
  console.log("== Move");
  console.log("let's try winning. ");
  game.stacks = [[3, 2, 1], [], [] ];
  game.print();
  game.move(0, 2);
  game.move(0, 1);
  game.move(2, 1);
  game.move(0, 2);
  game.move(1, 0);
  game.move(1, 2);
  game.move(0, 2);
  game.print();
  console.log("won?");
  console.log(game.isWon());
};

var testAll = function (){
  var game = new HanoiGame();
  testIsWon(game);
  testIsValidMove(game);
  testMove(game);
};

testAll();