$(window).scroll(function(){
    		if($(this).scrollTop()>80)
    		{
    			$(".bg-light").addClass("aa");
    			document.getElementById('backtotop').style.display="block";
    		}
    		else
    		{
    			$(".bg-light").removeClass("aa")
    			document.getElementById('backtotop').style.display="none";
    		}
    	})

AOS.init();