

var functionalPatternStack = function() {
  
  var newStack = {};
  newStack.theStack = Stack();

  newStack.creator = function() {
    for (var i = 0; i < 2000; i++) {
      var additionalStack = Stack();
    }
  };
  
  newStack.pusher = function() {
    for (var i = 0; i < 2000; i++) {
      newStack.theStack.push( 'stringy' );
    }
  };

  newStack.popper = function() {
    for (var i = 0; i < 2000; i++) {
      newStack.theStack.pop();
    }
  };
  return newStack;
};
var stacker = functionalPatternStack();
stacker.creator();
stacker.pusher();
stacker.popper();