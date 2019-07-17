$('input').on('focus',function(){
		var inputHeight=$('.gdbox input').height();
    $("html, body").animate({ scrollTop: inputHeight}, 600);
    return false;
 });