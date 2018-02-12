$(document).ready(function () {

/*$(":button").click(function () {
    $("p").append('salam');
});*/


$("#append-to").click(function () {

    var name=$("#name").val();
    $("#email").append(name);
   $("#text").clone().appendTo("#email");



});





});


