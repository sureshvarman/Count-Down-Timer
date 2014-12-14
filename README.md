Count-Down-Timer
================
Jquery Count Down Timer For Counting Down The Timer

Getting Started
-------------------------------------------------------------------------------------------------------------------------
Include Jquery library
```
<script src='http://code.jquery.com/jquery-1.5.1.js'></script>
```
Include Count-Down-Timer Plugin
```
<script src='countdowntimer.min.js'></script>
```
Create your timer as
```
	  $('.timer').timer({
	  endDateAndTime: new Date("12/14/2014 13:30:00"),
	  separator:':',
	  incremental:true,
	  timeUp : function() { $('.timer').css('color','#FF0000'); },
	  callbackBefore:(60*60*2),
	  callbackBeforefunction : function() { $('.timer').css('color','#00FF00'); }
	  });
```

Documentation
---------------------------------------------------------------------------------------------------------------------------
| Propeties     | Description   |
| ------------- | ------------- |
| endDateAndTime  | Javascript Date Object towards which your timer going to run  |
| seperator  | seperator between days, hours, minutes and seconds  |
| incremental  | boolean if true timer runs even after endDateAndTime is reached  |
| timeup  | A callback function to run after endDateAndTime is reached  |
| callbackBefore  | Before how many seconds the callbackBeforefunction needs to be executed    |
| callbackBeforefunction  | function to be executed before given callbackBefore seconds   |


Dependencies
-------------------------------------------------------------------------------------------------------------------------
jQuery greater than or equal to version 1.5.
