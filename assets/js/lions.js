(function(){
    
    if(screen.width < 768 || (BrowserDetect.OS == "Android" && BrowserDetect.browser == "mobile")){
        
        // ADD BROWSER SNIFFING HERE
        
        window.location = "./index-m.html"
        
    } else if(Modernizr.touch && !$('html').hasClass('ie10')) {
        // TOUCH DEVICES GET STRIPPED DOWN VERSION 
        document.write('<script src="./assets/js/lions_basic.js"></script>');
    } else {
        // DESKTOPS GET ENHANCED VERSION 
        document.write('<script src="./assets/js/lions_enhanced.js"></script>');
    }
}).call(this);