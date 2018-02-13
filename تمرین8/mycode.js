$(document).ready(function(){

var name=['esmaeeli1923@gmail.com','learnfiles@info.com','ali@yahoo.com'];


/*for(var i=0;i<3;i++)
{
	if(name[i]=='esmaeeli1923@gmail.com')
	{
		alert('found');
	}
}*/

/*$.each(name,function(index,value){
	/*alert(index+ ' : '+value);
	if(value=='ali@yahoo.com')
	{
		alert('found in =>'+index);
	}
	$('span').append(value+'<br>');
});*/

if($.inArray('esmaeeli1923@gmail.com',name) !='-1')
{
    	$('span').append('esmaeeli1923@gmail.com'+'<br>');
}



setInterval(function(){
	var time=$.now();
	$('p').text(time);
},1);

});