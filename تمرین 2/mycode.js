


  /* $(":button").click(function () {
       alert('salam');

    }) ;


   $("#dbl").dblclick(function () {

    alert('khubi');
});



   $("#myform").text(function () {
      /* var name= $("#txt").val();
     if(name== "");
     alert('plz enter name');*/



/*$(document).ready(function () {


    $("#city").change(function () {

        var cityname=$(this).val();


        if(cityname==tehran)
        {
            $("#c1").text('tehran');
            $("#a1").text('tehran_pars');
            $("#d1").text('abasabad');
        }
        else if(cityname==karaj)
        {
            $("#c1").text('karaj');
            $("#a1").text('karaj_pars');
            $("#d1").text('pars_karaj');
        }

        else {

            $("#c1").text('kafsdfj');
            $("#a1").text('karsdfsdrs');
            $("#d1").text('psdfsdaraj');

        }

    });
});*/




$(document).ready(function () {

   /* $('#video').hover(function () {

        $('#txt1').css('display','black');

    });*/


    $("#article").scroll(function () {

      var size=$(this).scrollTop();

      $('#scl').text('salam'+ sizxe);

if ( size==405.5){

    $('#sign-up').css('display','black');

}
    });



$(":text").focusin(function () {
    $(this).css('background','yellow');

}).focusout(function () {
    $(this).css('background','white');

});



});




