$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 200
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node[0]);

  });

  $(".lineUp").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     var leftKofTrack = 100;
     var leftSnorTrack = 201;
     var leftDitTrack = 301;
     for (var i = 0; i < window.dancers.length; i++){
      console.log($(window.dancers[i]).hasClass('koffing'))
      if ($(window.dancers[i]).hasClass('koffing')){
       $(window.dancers[i]).animate({"top": "300px", "left": leftKofTrack, "height": "10%", "length": "10%"});
       leftKofTrack += 25;
      }

      if ($(window.dancers[i]).hasClass('snorlax')) {
        $(window.dancers[i]).animate({"top": "400px", "left" : leftSnorTrack, "height": "10%", "length": "10%"});
        leftSnorTrack += 25;
      }

      if ($(window.dancers[i]).hasClass('ditto')){
        $(window.dancers[i]).animate({"top": "500px", "left" : leftDitTrack, "height": "10%", "length": "10%"});
        leftDitTrack += 25;
      }


     }


    //$('img').css("top", "300px");

  });

  $('body').on('mouseover', 'img', function(event){
    $(this).addClass('smaller');
  });
});

