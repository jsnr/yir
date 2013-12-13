//polyfills Array.indexOf for older browsers.
(function () {
    var i, j;
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj, start) {
            for (i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        };
    }
})();

(function (window, undefined) {
    window.ng = window.ng || {
        STATIC_URL : (window.ng && window.ng.STATIC_URL) ? ng.STATIC_URL : '',
        analytics : (window.ng && window.ng.analytics) ? ng.analytics : {
            comscore: {},
            ga: {},
            floodlight: {
                generate: function (options) {
                    var fl = document.createElement('iframe'),
                    catID = options.catID || '',
                    bust = Math.random()*10000000000000;
                    $(fl).attr({
                        'src': ['//fls.doubleclick.net/activityi;src=3661093;type=indiv055;cat=', catID,';ord=', bust, '?'].join(''),
                        'width': '1',
                        'height': '1',
                        'frameborder': '0',
                        'style': 'display: none;'
                    });
                    document.body.appendChild(fl);
                }
            }
        },
        Modernizr: window.Modernizr || undefined,
        $: window.jQuery || undefined,
        yepnope: window.yepnope || undefined,

        // NG cookie functions
        createCookie: function (name,value,days) {
                var expires,
                    date;

                if (days) {
                    date = new Date();
                    date.setTime( date.getTime() + (days*24*60*60*1000) );
                    expires = '; expires=' + date.toGMTString();
                } else {
                    expires = '';
                }

                document.cookie = name + '=' + value + expires + '; path=/';
        },
        readCookie: function(name) {
            var cookieName,
                ca;

            cookieName = name + '=';
            ca = document.cookie.split(';');
            for(var i=0; i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(cookieName) === 0) return c.substring(cookieName.length,c.length);
            }
            return null;
        },
        require: function (handle, options) {

        },
        location : function () {
            this.queryParams = (function () {
                var params = window.location.search.substr(1).split('&'),
                    qo = {};

                for (var i = params.length - 1; i >= 0; i--) {
                    params[i] = params[i].split('=');
                    qo[params[i][0]] = qo[params[i][1]];
                }
                if (!document.location.queryParams) {
                    document.location.queryParams = qo;
                }
                return qo;
            }());
            return document.location;
        },
        initChartBeat : function () {
            var loadChartbeat = function () {
                window._sf_endpt = (new Date()).getTime();
                var el = document.createElement('script');
                el.setAttribute('src', ( ('https:' === document.location.protocol) ? 'https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/' : 'http://static.chartbeat.com/') +'js/chartbeat.js');
                document.body.appendChild(el);
            };

            if (window.addEventListener) {
                window.addEventListener('load', loadChartbeat, false);
            } else {
                window.attachEvent('load', loadChartbeat);
            }
        },
        updateState : function (data, title, fragment) {
            //updates hash or history depending on feature support
            var hook = 'at/',
                path = window.location.pathname,
                query = window.location.search;

            path = path.substring(0, path.indexOf('/' + hook) + 1) || path;
            data = data || { state: fragment };
            if (ng.Modernizr.history) {
                window.history.pushState(data, title, path + hook + fragment + '/' + query);
            } else {
                window.location.hash = fragment;
            }
            $(window).trigger({
                type: 'stateChange',
                state: fragment
            });
            // Page View call for Omniture on update of URL
            if (window.s && window.s.t) {
                // fires a repeat view of the original URL, not the updated one
                // should be revisited as other sites start to use Vii and wanted better tracking
                s.t();
            }
        }
    };
    window.ng.canonical = ng.$('link[rel="canonical"]').attr('href');
} (window));

//auto-convert to hashed urls for broswers that don't
//support state and stated urls for ones that do.
(function (win, loc, undefined) {
    var path = loc.pathname,
        hash = loc.hash.slice(1),
        hook = '/at/',
        stateful = path.match(/\/(galleries)\//), /* ensures only stateful urls are translated. Stateful currently defined as galleries.*/
        hookIndex = (path.indexOf(hook) !== -1) ? path.indexOf(hook) + hook.length : null,
        state = (hookIndex !== null) ? path.slice(hookIndex) : null,
        history = (win.history && win.history.replaceState) ? win.history : null;

    if (history && stateful) {
        if (hash && !state) {
            //push it!
            history.pushState({state: hash}, '', hook + hash + loc.search);
        }
    } else if (state){
        //mmmm, potatoes... as in hash.
        win.location = path.split(hook)[0] + loc.search + '#' + state;
    }
}(window, window.location));

// adds CSS REM unit test to Modernizr
// as seen here https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css-remunit.js
window.Modernizr.addTest('cssremunit', function(){

    var div = document.createElement('div');
    try {
        div.style.fontSize = '3rem';
    } catch(er){}

    return (/rem/).test(div.style.fontSize);

});
window.Modernizr.addTest('picture', function(){

    return document.createElement('picture') && window.HTMLPictureElement;

});
window.yepnope([
{
    test: false //Modernizr.picture,
    nope: window.STATIC_URL + 'js/pictureTime.js'
},
{
    test: Modernizr.cssremunit,
    nope: window.STATIC_URL + 'js/rem.js'
}
]);

(function(){
    $(window).on('stateChange', function (e) {
        window.clearTimeout(ng.addThis_delay);
        ng.addThis_delay = window.setTimeout(function () {
            // on first load, don't run this so that the share URL is just the gallery/native object
            if ( typeof( window['addthis'] ) !== 'undefined' ) {
                // updates addThis share URL to follow that of the gallery URL to share specific photo.
                var firstUrl = document.querySelectorAll('meta[property="og:url"]')[0].content,
                    $addthis = ["<ul class=\"addthis_toolbox\" data-require=\"addThis\">",
                                "<li>",
                                    "<a class=\"addthis_button_facebook_like\" fb:like:layout=\"button_count\"></a>\n",
                                "</li>",
                                "<li>",
                                    "<a class=\"addthis_button_tweet\" tw:count=\"horizontal\" tw:via=\"natgeo\"></a>",
                                "</li>",
                                "<li>",
                                    "<a class=\"addthis_button_google_plusone\" g:plusone:size=\"medium\" g:plusone:annotation=\"bubble\"></a>",
                                "</li>",
                                "<li>",
                                    "<a class=\"addthis_button_compact addthis_bubble_style\">",
                                        "<img src=\"" + window.STATIC_URL + "images/css_images/addthis_20x20.png\" width=\"20\" height=\"20\" />",
                                    "</a>",
                                "</li>",
                                "</ul>"].join('\n');

                ng.$('.addthis_toolbox').empty().html($addthis);
                addthis.update('share', 'url', firstUrl + e.state);
                addthis.toolbox(".addthis_toolbox", window.addthis_config, window.addthis_share);
            }
        }, 200);
    });
})();


// Tests for touch events
// Note - Modernizr's touch detects only if a browser supports touch events. Need to figure out if we should test for touchscreen devices sparately.
window.yepnope([
    {
        test: Modernizr.touch,
        yep: [ window.STATIC_URL + 'js/lib/jquery.hammer.min.js'],
        nope: ['']
    }
]);
