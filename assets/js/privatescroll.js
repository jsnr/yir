(function($) {
    $.fn.privateScroll = function() {
        if ( this.length === 0 ) {
            return this;
        }
        this.bind('DOMMouseScroll mousewheel', function(e) {
                var delta = 0;
                if (typeof e.originalEvent.wheelDeltaY !== 'undefined') { // chrome, safari, opera
                    delta = e.originalEvent.wheelDeltaY;
                } else if (typeof e.originalEvent.wheelDelta !== 'undefined') { // ie
                    delta = e.originalEvent.wheelDelta;
                } else if (typeof e.originalEvent.detail != 'undefined') { // ff
                    delta = e.originalEvent.detail * -20;
                }
                if ( delta !== 0 ) {
                    $(this).scrollTop($(this).scrollTop() - delta );
                    e.preventDefault();
                    return false;
                }
        });
        return this;
    };
})(jQuery);