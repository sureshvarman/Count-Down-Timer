Count-Down-Timer
================
Jquery Count Down Timer For Counting Down The Timer

Getting Started
-------------------------------------------------------------------------------------------------------------------------
<script src='http://code.jquery.com/jquery-1.5.1.js'></script>
<script src='countdowntimer.min.js'></script>	
<div class="timer"></div>
<script type="text/javascript">
    window.onload = function () {
	  $('.timer').timer({
        endDateAndTime: new Date("12/14/2014 13:30:00"),
	    Separator:':',
		incremental:true,
		timeUp : function() { $('.timer').css('color','#FF0000'); },
		callbackBefore:(60*60*2),
		callbackBeforefunction : function() { /*$('.timer').css('color','#00FF00');*/ alert();}
	  });
}
</script>



Dependencies
-------------------------------------------------------------------------------------------------------------------------
jQuery greater than or equal to version 1.5.
