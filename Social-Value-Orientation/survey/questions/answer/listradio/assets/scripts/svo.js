
/***** 
    JavaScript for the Social Value Orientation question theme
    Copyright (C) 2020 - Tony Partner (http://partnersurveys.com)
    Licensed MIT, GPL
    Version - 1.0
    Create date - 03/12/2020
*****/

/** SOCIAL VALUE ORIENTATION QUESTION **/

function initSVO(thisQuestion, showValues) {
	if(showValues == 'yes') {
		$('.svo-row-label .value', thisQuestion).removeClass('hidden');
		
		function handleValues() {
			var checkedItem = $('.svo-item :radio:checked', thisQuestion).closest('.svo-item');
			$('.svo-row-label.top .value', thisQuestion).text($('.svo-item-button .top', checkedItem).text());
			$('.svo-row-label.bottom .value', thisQuestion).text($('.svo-item-button .bottom', checkedItem).text());
		}
		
		// Initial state
		handleValues();
		
		// Listener on radios
		$('.svo-item :radio', thisQuestion).on('click', function(e) {
			handleValues()
		});
	}
}

$(document).on('ready pjax:scriptcomplete',function(){
});