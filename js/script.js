//$(document).ready function(){


	function readMore(){


		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show();
	 
	}

	function readLess(){

		
		$("#show-this-on-click").hide();
		$(".readless").slideUp();
		$(".readmore").show();


	}

	function learnMore(){

		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
	}

	$(".readmore").click(readMore);
	$(".readless").click(readLess);
	$(".learnmore").click(learnMore);

	

//}

















//}