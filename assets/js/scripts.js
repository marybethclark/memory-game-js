// -------------  event timer --------------------------------------------
var start = new Date;

setInterval(function() {
    $('.timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);

// --------------- begin clickCounter and 1st card flip --------------------

var clickCounter = 0;
// var secondCard = ?????????
$(".cardunflipped").on("click",function(){
  clickCounter++

if(clickCounter === 1){
  $(this).addClass("cardflipped");
}
// ------------- adding next 2 lines makes all cards flip at onece -----------
   else if(clickCounter === 2){
   $(".cardunflipped").addClass("cardflipped");
  //  $(".cardflipped").removeClass("cardunflipped");
   }
});

//  ---------  I know I need to reset the clickCounter to 0 after 2 flips.
// That's some of my code below. ---------------------------------------------

// -------------------------------------------------------------------------
 // Somewhere in the tangled mess below is code that made two
// cards turn red aftr flipped, by adding the class of .match.
// I broke it during my experimentations.
 // I havent YET(!!) discovered how to check if they actually ARE a matched pair.
 // Can't YET figure out how to tell js to look at the second card clicked and
 // compare it to the first card clicked.
 // ---------------------------------------------------------------------------


  //   && $(this).attr("id")===("1") &&
  // $(".cardflipped").attr("value")
  // $(this).addClass("cardflipped");
  // $(this).addClass("match");
  // $(".cardflipped").addClass("match");
  // $(".match").removeClass("cardflipped");
  // clickCounter=0;

// I need to have jquery look at a card that is clicked twice, so that it
// doesn't think it's a match with itself.

// var secondCardClicked = $(".cardunflipped")
// else if (clickCounter===2 && $



// Isn't this ".cardflipped" in line 52 supposed to be referring to card #2, which
 // doesn't yet HAVE a class of .cardflipped? How does js know it's card #2 ??

// else if (clickCounter===2 && $(this).attr("value")!==$(".cardflipped").attr("value")){
// $(this).addClass("cardflipped");
// $(".cardflipped").addClass("cardunflipped");else if (clickCounter === 2 && $(this)===.attr("value")){
//
// }
// };

// --------- attempts below for what to do if same card clicked twice" -------------

//   $(".cardflipped").addClass("cardunflipped");
//   $(this).removeClass("cardflipped");
//   console.log("same card clicked twice");
//   clickCounter=0

  //   && $(this).attr("id")===("1") && $
  // $(".cardflipped").attr("value")
  // $(this).addClass("cardflipped");
  // $(this).addClass("match");
  // $(".cardflipped").addClass("match");
  // $(".match").removeClass("cardflipped");
  // clickCounter=0;
// });

  // else if (clickCounter===2 && $(this).attr("value")!==$(".cardflipped").attr("value")){
  // $(this).addClass("cardflipped");
  // $(".cardflipped").addClass("cardunflipped");

//---------------- Below are my afforts at adding  .setTimeout or .setInterval,
// so there will be a pause before un-matched cards turn back over ------------------

  // var pause;
  // function delay(){
  //   pause = setTimeout(1000);
  // }

//   $(".cardunflipped").removeClass("cardflipped");
//   clickCounter=0;

// ----------  my earliest efforts below ---------------------------------------

//   $(".cardunflipped").click(function () {
//
// // add 1 to the click counter
//    if (count == 2) {

// // when click counter reaches 2 clicks, check for a pair match (HOW???)
//
//     var oneOfTwo = $(val)
//     var twoOfTwo = $(val)
//
//      checkForMatch(function() {
//        if (oneoftwo === twooftwo).do nothing;
//
// });


// add a counter to detect 2 clicks here
// $(function(){
// $(".cardflipped").hasClass("heart");
// if (true){
// $(this).removeClass("cardunflipped");
// }
// else if(  ){
// $(this).toggleClass("cardunflipped");
// }
// else ()
// }});


// Need a function that compares the icon class of two flipped cards.

// var counter = 0;
// $('.cardunflipped').on("click", function(){
// counter = counter+1;
// $(this).find('.tag').html(counter);
// });



// else if (true) {


// var x=1
//
// console.log(x);
