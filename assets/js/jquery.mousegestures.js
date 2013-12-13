(function($) {

/*                                                             *
   *    events:                                                   *
   *        wheelUp                                               *
   *        wheelDown                                             *
   *        wheelLeft (trackpad/magic mouse only)                 *
   *        wheelRight (trackpad/magic mouse only)                *
   *                                                              */

    var uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1),
        evtFired = false,
        chkDir, xRange = [],
        yRange = [];


    $.fn.mouseGesture = function() {
        $(window).on('scrollstart', function(e) {
            xRange = [];
            yRange = [];
            evtFired = false;
            $(window).off('scrollstart');
        });
        $(window).on('scrollstop', function(e) {
            if (!evtFired) {
                var scrollDir = chkDir();
                $(document).trigger(scrollDir);
            }
            $(window).delay(500).on('scrollstart', function(){
                xRange = [];
                yRange = [];
                evtFired = false;
                $(window).off('scrollstart');
            });
        });
        $(this).on('wheel mousewheel', function(evt) {
            if (evtFired) return;
            var oEvt = evt.originalEvent;

            if (oEvt.deltaY != undefined) {
                xRange.push(oEvt.deltaX);
                yRange.push(oEvt.deltaY);
            } else if (oEvt.wheelDeltaY != undefined) {
                 xRange.push(oEvt.wheelDeltaX);
                yRange.push(oEvt.wheelDeltaY);
            }

            if (xRange.length > 6) {
                evtFired = true;
                var scrollDir = chkDir();
                $(document).trigger(scrollDir);
            }
        });
    };

    chkDir = function() {

        var len = xRange.length;
        
        var diffX = Math.abs(xRange[len-1] - xRange[0]);
        var diffY = Math.abs(yRange[len-1] - yRange[0]);
        
        if(diffX > diffY){
            if(xRange[len-1] > 0){
                return "wheelLeft";
            } else {
                return "wheelRight";
            }
        } else {
            if(yRange[len-1] > 0){
                return "wheelUp";
            } else {
                return "wheelDown";
            }
        }
    },

    $.event.special.scrollstart = {
        setup: function() {
            var timer, handler = function(evt) {
                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        $(this).trigger(evt.type, _args);
                    }

                    timer = setTimeout(function() {
                        timer = null;
                    }, $.event.special.scrollstop.latency);

                };

            jQuery(this).on('wheel mousewheel', handler).data(uid1, handler);

        },
        teardown: function() {
            jQuery(this).off('wheel mousewheel', jQuery(this).data(uid1));
        }
    };

    $.event.special.scrollstop = {
        latency: 200,
        setup: function() {
            var timer, handler = function(evt) {
                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function() {
                        timer = null;
                        evt.type = 'scrollstop';
                        $(this).trigger(evt.type, _args);

                    }, $.event.special.scrollstop.latency);

                };
            jQuery(this).on('wheel mousewheel', handler).data(uid2, handler);

        },
        teardown: function() {
            jQuery(this).off('wheel mousewheel', jQuery(this).data(uid2));
        }

    };

})(jQuery);
