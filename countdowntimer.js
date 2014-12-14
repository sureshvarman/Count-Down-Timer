(function ($) {

    $.fn.timer = function (options) {
        return this.each(function () {
            countdown($(this), options);
        });
    };
	
	 function countdown($this, options) {
	 var opts = $.extend({}, $.fn.timer.defaults, options);
	 				
	 function countDownTimer() {
			startTime = new Date();
			endTime = opts.endDateAndTime;
		
			var time =  endTime.getTime() - startTime.getTime();
			
			var difference_ms = time/1000;
			
			
			
			window['timerSeconds'] = Math.floor(difference_ms % 60);
			window['timerSeconds'] = window['timerSeconds'] < 10 && window['timerSeconds'] > -1 ? '0'+window['timerSeconds'] : window['timerSeconds'];
			
			difference_ms = difference_ms/60; 
			
			window['timerMinutes'] = Math.floor(difference_ms % 60);
			window['timerMinutes'] = window['timerMinutes'] < 10 && window['timerMinutes'] > -1 ? '0'+window['timerMinutes'] : window['timerMinutes'];
			
			difference_ms = difference_ms/60; 
			
			window['timerHour'] = Math.floor(difference_ms % 24);  
			window['timerHour'] = window['timerHour'] < 10 && window['timerHour'] > -1 ? '0'+window['timerHour'] : window['timerHour'];
			
			window['timerDays'] = Math.floor(difference_ms/24);
			window['timerDays'] = window['timerDays'] < 10 && window['timerDays'] > -1 ? '0'+window['timerDays'] : window['timerDays'];
			
			if(opts.callbackBefore > 0 && opts.callbackBeforefunction != null) {
				funct_callbackbefore();			
			}
			
			if(parseInt(window['timerDays']) >  0 || parseInt(window['timerHour']) > 0 || parseInt(window['timerMinutes']) > 0 || parseInt(window['timerSeconds']) > 0) {
				if(parseInt(window['timerDays']) > 0 || parseInt(window['timerDays']) < 0) {
					$this.html(window['timerDays']+opts.seperator+window['timerHour']+opts.seperator+window['timerMinutes']+opts.seperator+window['timerSeconds']);
				}
				else {
					$this.html(window['timerHour']+opts.seperator+window['timerMinutes']+opts.seperator+window['timerSeconds']);
				}
			}
			if(parseInt(window['timerDays']) <= 0 && parseInt(window['timerHour']) <= 0 && parseInt(window['timerMinutes']) <= 0 && parseInt(window['timerSeconds']) <= 0) {
				if(!opts.incremental) {
						$this.html("00:00:00:00");
						
				}
				else {
					window['timerDays'] += 1;
					window['timerHour'] += 1;
					window['timerMinutes'] += 1;
					window['timerSeconds'] += 1;
					
					var days = 0-window['timerDays'];
					var hours = 0-window['timerHour'];
					var minutes = 0-window['timerMinutes'];
					var seconds =0-window['timerSeconds'];
					
					days = days > 0 ? days < 10 ? '0' + days : days : (days-0) < 10 ? '0' + (days-days) : (days-days);
					hours = hours > 0 ? hours < 10 ? '0' + hours : hours : (hours-0) < 10 ? '0' + (hours-hours) : (hours-hours);
					minutes = minutes > 0 ? minutes < 10 ? '0' + minutes : minutes : (minutes-0) < 10 ? '0' + (minutes-minutes) : (minutes-minutes);
					seconds = seconds > 0 ? seconds < 10 ? '0' + seconds : seconds : (seconds-0) < 10 ? '0' + (seconds-seconds) : (seconds-seconds);
					
					//days = (0-window['timerDays']) < 10  ? '0'+(0 - window['timerDays']):(0 - window['timerDays']);
					//hours = (0-window['timerHour']) < 10  ? '0'+(0 - window['timerHour']):(0 - window['timerHour']);
					//minutes = (0-window['timerMinutes']) < 10  ? '0'+(0 - window['timerMinutes']):(0 - window['timerMinutes']);
					//seconds =(0-window['timerSeconds']) < 10  ? '0'+(0 - window['timerSeconds']):(0 - window['timerSeconds']);
					
					if(days > 0){
						$this.html("+"+days+opts.seperator+hours+opts.seperator+minutes+opts.seperator+seconds);
					}
					else{
						$this.html("+"+hours+opts.seperator+minutes+opts.seperator+seconds);
					}
				}
			}
					
			if(parseInt(window['timerDays']) <= 0 && parseInt(window['timerHour']) <= 0 && parseInt(window['timerMinutes']) <= 0 && parseInt(window['timerSeconds']) <= 0) {
				if(opts.timeUp != null) {
					opts.timeUp();
					
				}
			}

	 }
	 
	 function funct_callbackbefore(){
		 var callbackMdifference = opts.callbackBefore;
					var days = 0;
					var hours = 0;
					var minutes = 0;
					var seconds = 0;
					
					seconds = callbackMdifference % 60;
					callbackMdifference /= 60;
					minutes = Math.floor(callbackMdifference % 60);
					callbackMdifference /= 60;
					hours = Math.floor(callbackMdifference % 24);
					days = 	Math.floor(callbackMdifference/24);
					
					if(parseInt(window['timerDays']) == days && parseInt(window['timerHour']) == hours && parseInt(window['timerMinutes']) == minutes && parseInt(window['timerSeconds']) == seconds)
					{
						opts.callbackBeforefunction();
					}
	 }
	 
	 var run = setInterval(countDownTimer, opts.tickInterval * 1000); 
		
	 }
	 
    $.fn.timer.defaults = {
		endDateAndTime:null,
		seperator: ":",
		tickInterval: 1,
		callbackBefore:0,
		callbackBeforefunction : null,
		timeUp: null,
		incremental:false
    };
	
}(jQuery));