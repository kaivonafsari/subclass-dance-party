var makeTestDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="koffing" src="https://38.media.tumblr.com/0c09085ef1bde2e7bcf88ef72ced6566/tumblr_mkud0j9DVw1r67h3uo1_500.gif" />');
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
 makeTestDancer.prototype = Object.create(makeDancer.prototype);
 makeTestDancer.prototype.constructor = makeTestDancer;
 makeTestDancer.prototype.step = function(){
  this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.slideToggle();
  };
