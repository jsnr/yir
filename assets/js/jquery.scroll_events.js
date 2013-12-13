(function(){
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);

    special.scrollstart = {
        setup: function() {
            var timer,
                handler =  function(evt) {
                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        $(this).trigger(evt.type, _args);
                    }

                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);

                };

            jQuery(this).on('wheel mousewheel', handler).data(uid1, handler);

        },
        teardown: function(){
            jQuery(this).off( 'wheel mousewheel', jQuery(this).data(uid1) );
        }
    };

    special.scrollstop = {
        latency: 200,
        setup: function() {
            var timer,
                    handler = function(evt) {
                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout( function(){
                        timer = null;
                        evt.type = 'scrollstop';
                        $(this).trigger(evt.type, _args);
                        
                    }, special.scrollstop.latency);

                };
            jQuery(this).on('wheel mousewheel', handler).data(uid2, handler);

        },
        teardown: function() {
            jQuery(this).off( 'wheel mousewheel', jQuery(this).data(uid2) );
        }
        
    };

})();