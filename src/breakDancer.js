var makeBreakDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="testDancer" src="http://24.media.tumblr.com/ea2da9b881733728171121558d343669/tumblr_mj0s5kmzDU1s6n6eyo1_500.gif" />');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // blinkyDancer.step = function(){
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };

  //return blinkyDancer;
};
 makeBreakDancer.prototype = Object.create(makeDancer.prototype);
 makeBreakDancer.prototype.constructor = makeBreakDancer;
 makeBreakDancer.prototype.step = function(){
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.slideToggle();
  };
