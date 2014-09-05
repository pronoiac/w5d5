function Clock () {
}

Clock.TICK = 5000;


Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(
    this.currentTime.getHours() + ":" + 
    this.currentTime.getMinutes() + ":" + 
    this.currentTime.getSeconds()     
  );
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  this.currentTime = new Date();
  
  // 2. Call printTime.
  console.log ("First time!");
  this.printTime();
  
  // 3. Schedule the tick interval.
  // maybe try this in the other ways: i.e. call/apply or method style
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  this.currentTime.setMilliseconds (
    this.currentTime.getMilliseconds() + Clock.TICK 
  );
  
  // 2. Call printTime.
  this.printTime();
};

var clock = new Clock();
clock.run();
