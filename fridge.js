

$('.userContent').each(function(index){
	for(var i = 0; i < blacklist.length; i++){
		if($(this).html().indexOf(blacklist[i])!= -1){
			$(this).html("Content filtered.");
		}
	}
});
