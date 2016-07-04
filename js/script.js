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

	$(".readmore").click(readMore);
	$(".readless").click(readLess);

	



















//}