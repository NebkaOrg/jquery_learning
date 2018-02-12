$(document).ready(function () {

      var item=$('a').attr('id');
    alert(item);




    $("#btn").click(function () {

       /* var temp=$('#name').val();

        alert(temp);*/


       var name=$("#name").val();
        var email=$("#email").val();

        if (name!='' && email!='')
        {
          alert('ok');
        }

       else
        {
            alert('error');
        }



    });







});


