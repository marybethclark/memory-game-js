var start = new Date;

setInterval(function() {
    $('.timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);

$(".cardunflipped").on("click",function(){
  $(this).addClass("cardflipped");
});
// toggle was making it flip back


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
