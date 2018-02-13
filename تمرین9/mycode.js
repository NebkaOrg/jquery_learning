$(document).ready(function(){

	var time=$.now();
	second=time/1000;

	eventtime=Date.parse('20 August 2016')/1000;

	currenttime=second;

    finaltime=eventtime-currenttime;

    finaltime=finaltime/(60*60*24);
    finaltime=Math.floor(finaltime);
    $("#text").text('only '+finaltime+' day remained');
    
    $(":button").click(function(){
    	 $("#content").load('content.txt');
    	 $("#content").fadeIn();
    });
   
});