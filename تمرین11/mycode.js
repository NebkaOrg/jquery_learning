$(document).ready(function(){

$("#send").click(function(){

	var temp=$("#name").val();
	var email=$("#email").val();
	var phone=$("#phone").val();
	if(temp=='')
	{
          $("#res").text('please fill name..').slideDown();
	}
	else
	{
	$.post('myfile.php',{ new_name: temp , new_email: email , new_phone: phone },function(data){ 
		$("#result").html(data);
		$("#res").html(data).slideDown();
	

	 }).error(function(){ $("#res").text('cannot send data..there is an error').slideDown(); });}

});

});