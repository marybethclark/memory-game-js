// -------------  event timer -----------------
var start = new Date;

setInterval(function() {
    $('.timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);

// --------------- card flip --------------------

var clickCounter = 0;
$(".cardunflipped").on("click",function(){
  clickCounter++
   if (clickCounter === 1){
  $(this).addClass("cardflipped");
}
  else if(clickCounter === 2 && $(this).attr("value")===$(".cardflipped").attr("value")){
  $(this).addClass("cardflipped");
  $(this).addClass("match");
  $(".cardflipped").addClass("match");
  $(".match").removeClass("cardflipped");
  clickCounter=0;
}
// ---need to add  .setTimeout or .setInterval here, so there will be a pause before un-matched cards turn back over -------
else if (clickCounter===2 && $(this).attr("value")!==$(".cardflipped").attr("value")){
  $(this).addClass("cardflipped");
  $(".cardflipped").addClass("cardunflipped");


  $(".cardunflipped").removeClass("cardflipped");
  clickCounter=0;

}
})


// (function () {
//
//
//   $(".cardunflipped").click(function () {
//
// // add 1 to the click counter
//    if (count == 2) {
// // when click counter reaches 2 clicks, check for a pair match (HOW???)
//
//     var oneOfTwo = $(val)
//     var twoOfTwo = $(val)
//
//
//      checkForMatch(function() {
//        if (oneoftwo === twooftwo).do nothing;
//
//
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
