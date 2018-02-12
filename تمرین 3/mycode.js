$(document).ready(function () {

    $("#addclass").click(function () {
        $("#text").addClass('bold');
    });


    $("#remove_class").click(function () {

        $("#text").removeClass('bold')
    });



    $("#toggle").click(function () {

        $("#text").toggleClass('bold')
    });

    $("#live").click(function () {

     var temp=window.getSelection();

     var span='<Span class="bold" >'+temp+'<span>';

        var text=$("#mytext").html();

        $("#mytext").html(text.replace(text,span));

   });



});


