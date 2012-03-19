var startTime;
var endTime;
var clickTime;
$(document).ready(function(){
		startTime = new Date().getTime();
});

$(function(){
	$('.timer').bind('click', function(){
		var lastClickTime = clickTime;
		clickTime = new Date().getTime();
		totalTime = clickTime - startTime;
		costTime= clickTime - lastClickTime;
		if(!costTime){
			costTime = "FirstClick";
		}
		console.log(startTime+" "+clickTime+" "+costTime+" "+totalTime);
		$("p").remove();
		$("br").remove();
		$("button").append("</br>");
		$("ul").append("<p></p>");
		$("p").append("</br>ClicktoClick: "+costTime+"  FromPageReady: "+totalTime);
	});
})();
