/*$(window).unload(function(){

alert('welcome');
}
);*/

/*window.onbeforeunload=function (){
alert('you are leaving this page');
};*/




$(document).ready(function () {

    /*$("#btn").click(function () {

        $("#btn").css('background','green');

    });


   $('p').text('salam khubi');
   $('p:odd').css('font-size','50px');


   $('#email').click(function () {

       $('#email').css('background','black').css('color','blue');


       var val_email = "enter your email";

       $('#email').attr('value',val_email);



       $('#email').click(function () {
           $('#email').attr('value', '');

       }).blur(function () {
           $('#email').attr('value', val_email);

       })

   });*/



$(":text").click(function () {

   $(this).css('background','lightblue').css('color','red');

});


$("#serch").click(function () {


    var name = $(this).val();

    $("#emails p:contains('"+name+"')").css('background','blue');

});






$("#zoom-in").click(function () {

    var size=parseInt($("#mytext").css('font-size'));

    size+=2;

    $("#mytext").css('font-size',size);

});









});