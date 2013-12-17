(function($) {
    // ONLY LOAD IF IS LARGER THAN IPHONE
	if(screen.width > 767){
        //var url = 'http://www.nationalgeographic.com/assets/tophat_json/?callback=?';
        var url = 'http://live.wpf.test.nationalgeographic.com/assets/tophat_json/?callback=?';
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(json) {
                //console.log(json);
                $('.global-header').html(json.global_nav);
                $('.global-header #navigation_mainB').remove();
                $('.celeb-125').remove();
            },
            error: function(e) {
                //console.log(e.message);
            }
        });
	}
	
	
})(jQuery);