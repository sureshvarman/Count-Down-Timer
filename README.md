Count-Down-Timer
================
Jquery Count Down Timer For Counting Down The Timer

Getting Started
-------------------------------------------------------------------------------------------------------------------------
<html>
<head>
    <title>Timer</title>
<script src='http://code.jquery.com/jquery-1.5.1.js'></script>
<script src='countdowntimer.min.js'></script>	

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
</head>
<body>
<h1>Count Down Timer</h1>
    <div class="timer">
        
    </div>
</body>
</html>

Dependencies
-------------------------------------------------------------------------------------------------------------------------
jQuery greater than or equal to version 1.5.
