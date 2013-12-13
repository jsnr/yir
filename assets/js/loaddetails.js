var LoadDetails = {
    
    totalSize: 0,
    loadedSize: 0,
    percentLoaded: 0, 
    
    setImageToLoad: function(imgURL){
        if(this.images[imgURL] != undefined)this.totalSize += this.images[imgURL];
    },
    
    setAsLoaded: function(imgURL){
        if(this.images[imgURL] == undefined)return this.percentLoaded;
        
        this.loadedSize += this.images[imgURL];
        this.percentLoaded = Math.round(100 * (this.loadedSize/this.totalSize));
        return this.percentLoaded;
    },
    
    images: {
        // INDEX
        './assets/i/index/ZebraFeast-index_lo.jpg': 23,
        './assets/i/index/Thunderstorm-index_lo.jpg': 18,
        './assets/i/index/TrackingLions-index_lo.jpg': 23,
        './assets/i/index/Twilight-index_lo.jpg': 14,
        './assets/i/index/TheKillers-index_lo.jpg': 29,
        './assets/i/index/TheRobot-index_lo.jpg': 27,
        './assets/i/index/Roar-index_lo.jpg': 16,
        './assets/i/index/Serengeti-index_lo.jpg': 23,
        './assets/i/index/Pride-index_lo.jpg': 18,
        './assets/i/index/QuenchingThirst-index_lo.jpg': 19,
        './assets/i/index/PreySighting-index_lo.jpg': 13,
        './assets/i/index/LaunchPageLoop-index_lo.jpg': 26,
        './assets/i/index/Night-index_lo.jpg': 26,
        './assets/i/index/Play-index_lo.jpg': 19,
        './assets/i/index/Hunt1-index_lo.jpg': 16,
        './assets/i/index/Kopje-index_lo.jpg': 25,
        './assets/i/index/GoldenDay-index_lo.jpg': 24,
        './assets/i/index/Hunger-index_lo.jpg': 18,
        './assets/i/index/Coalition-index_lo.jpg': 25,
        './assets/i/index/Cubs-index_lo.jpg': 28,
        './assets/i/index/Awakening-index_lo.jpg': 26,
        './assets/i/index/BloodandBones-index_lo.jpg': 23,
        './assets/i/index/Afternoon-index_lo.jpg': 40,
        './assets/i/index/Alpha-index_lo.jpg': 17,
        
        // VIDEO STILLS
        './assets/i/video_stills/Afternoon.jpg': 251,
        './assets/i/video_stills/Alpha.jpg': 245,
        './assets/i/video_stills/Awakening.jpg': 191,
        './assets/i/video_stills/BloodandBones.jpg': 231,
        './assets/i/video_stills/Coalition.jpg': 143,
        './assets/i/video_stills/Cubs.jpg': 265,
        './assets/i/video_stills/GoldenDay.jpg': 71,
        './assets/i/video_stills/Hunger.jpg': 172,
        './assets/i/video_stills/Hunt.jpg': 141,
        './assets/i/video_stills/Kopje.jpg': 141,
        './assets/i/video_stills/LaunchPageLoop.jpg': 165,
        './assets/i/video_stills/Night.jpg': 149,
        './assets/i/video_stills/Play.jpg': 135,
        './assets/i/video_stills/PreySighting.jpg': 81,
        './assets/i/video_stills/Pride.jpg': 207,
        './assets/i/video_stills/QuenchingThirst.jpg': 135,
        './assets/i/video_stills/Roar.jpg': 149,
        './assets/i/video_stills/Serengeti.jpg': 314,
        './assets/i/video_stills/TheKillers.jpg': 151,
        './assets/i/video_stills/TheRobot.jpg': 266,
        './assets/i/video_stills/Thunderstorm.jpg': 109,
        './assets/i/video_stills/TrackingLions.jpg': 159,
        './assets/i/video_stills/Twilight.jpg': 151,
        './assets/i/video_stills/ZebraFeast.jpg': 190,
        
        // MEDIA
        
        // ABOUT
        './assets/media/about/about-hildur-900.jpg': 100,
        './assets/media/about/about-hildur.jpg': 101,
        './assets/media/about/brent.jpg': 12,
        
     // BLACK MANE
        './assets/media/alpha/01_MM7947_120407_154238_NN_lo.jpg': 13,
        './assets/media/alpha/01_MM7947_120407_154238_NN.jpg': 232,
        './assets/media/alpha/02_MM7947_120210_093637_lo.jpg': 19, 
        './assets/media/alpha/02_MM7947_120210_093637.jpg': 300,
        './assets/media/alpha/03_MM7947_120212_094889_lo.jpg': 13,
        './assets/media/alpha/03_MM7947_120212_094889.jpg': 240,
        './assets/media/alpha/04_MM7947_120404_151243_lo.jpg': 22,
        './assets/media/alpha/04_MM7947_120404_151243.jpg': 115,
        './assets/media/alpha/05_MM7947_120203_084791ML_lo.jpg': 19,
        './assets/media/alpha/05_MM7947_120203_084791ML.jpg': 120,
        
     // COALITION
        './assets/media/coalition/01_MM7947_121111_214034_lo.jpg': 31,
        './assets/media/coalition/01_MM7947_121111_214034.jpg': 235,
        './assets/media/coalition/02_MM7947_121014_177204_lo.jpg': 16,
        './assets/media/coalition/02_MM7947_121014_177204.jpg': 253,
        './assets/media/coalition/03_MM7947_121014_177387_lo.jpg': 16,
        './assets/media/coalition/03_MM7947_121014_177387.jpg': 265,
        './assets/media/coalition/04_MM7947_121014_179057_lo.jpg': 11,
        './assets/media/coalition/04_MM7947_121014_179057.jpg':  128,
        
     // CONSORT
        './assets/media/consort/01_MM7947_121123_231057ML_lo.jpg': 26,
        './assets/media/consort/01_MM7947_121123_231057ML.jpg': 141,
        './assets/media/consort/02_MM7947_121124_231696ML_lo.jpg': 17,
        './assets/media/consort/02_MM7947_121124_231696ML.jpg': 107,
        './assets/media/consort/03_MM7947_121122_229573_lo.jpg': 22,
        './assets/media/consort/03_MM7947_121122_229573.jpg': 153,
        './assets/media/consort/04_MM7947_110922_052575ML_lo.jpg': 28,
        './assets/media/consort/04_MM7947_110922_052575ML.jpg': 185,
        
     // CUBS
        './assets/media/cubs/01_MM7947_111008_071249_lo.jpg': 20,
        './assets/media/cubs/01_MM7947_111008_071249.jpg': 320,
        './assets/media/cubs/02_MM7947_120321_136220ML_lo.jpg': 34, 
        './assets/media/cubs/02_MM7947_120321_136220ML.jpg': 240,
        './assets/media/cubs/03_MM7947_120321_136955ML_lo.jpg': 28,
        './assets/media/cubs/03_MM7947_120321_136955ML.jpg': 163,
        './assets/media/cubs/04_MM7947_110918_047590_lo.jpg': 23,
        './assets/media/cubs/04_MM7947_110918_047590.jpg': 136,
        './assets/media/cubs/05_MM7947_120324_142061_lo.jpg': 16,
        './assets/media/cubs/05_MM7947_120324_142061.jpg': 211,
        './assets/media/cubs/06_MM7947_110920_050112_lo.jpg': 27,
        './assets/media/cubs/06_MM7947_110920_050112.jpg': 161,
        './assets/media/cubs/07_MM7947_120225_109415_lo.jpg': 13,
        './assets/media/cubs/07_MM7947_120225_109415.jpg': 170,
        
     // HUNGER
        './assets/media/hunger/01_MM7947_110912_040014_lo.jpg': 24,
        './assets/media/hunger/01_MM7947_110912_040014.jpg': 169,
        './assets/media/hunger/02_MM7947_110912_040097ML_lo.jpg': 24,
        './assets/media/hunger/02_MM7947_110912_040097ML.jpg': 142,
        './assets/media/hunger/03_MM7947_110912_040107_lo.jpg': 22,
        './assets/media/hunger/03_MM7947_110912_040107.jpg': 126,
        
     // HUNT
        './assets/media/hunt/01_MM7947_121115_220455_lo.jpg': 8,
        './assets/media/hunt/01_MM7947_121115_220455.jpg': 87,
        './assets/media/hunt/02_MM7947_121211_249777ML_lo.jpg': 28,
        './assets/media/hunt/02_MM7947_121211_249777ML.jpg': 202,
        './assets/media/hunt/03_MM7947_121212_251240ML_lo.jpg': 27,
        './assets/media/hunt/03_MM7947_121212_251240ML.jpg': 230,
        './assets/media/hunt/04_MM7947_121212_251525_lo.jpg': 39,
        './assets/media/hunt/04_MM7947_121212_251525.jpg': 286,
        './assets/media/hunt/05_MM7947_121212_251609_lo.jpg': 14,
        './assets/media/hunt/05_MM7947_121212_251609.jpg': 230,
        
     // KILLERS
        './assets/media/killers/01_MM7947_121103_198381ML_lo.jpg': 15,
        './assets/media/killers/01_MM7947_121103_198381ML.jpg': 216,
        './assets/media/killers/02_MM7947_121118_226083_lo.jpg': 34,
        './assets/media/killers/02_MM7947_121118_226083.jpg': 314,
        
     // LION GUARDIANS
        './assets/media/Lion_Guardians/01-MM8218_12-11-03_18272_lo.jpg': 28,
        './assets/media/Lion_Guardians/01-MM8218_12-11-03_18272.jpg': 256,
        './assets/media/Lion_Guardians/02-MM8218_12-11-03_18596_lo.jpg': 25,
        './assets/media/Lion_Guardians/02-MM8218_12-11-03_18596.jpg': 412,
        './assets/media/Lion_Guardians/03_Q7C3973_lo.jpg': 18,
        './assets/media/Lion_Guardians/03_Q7C3973.jpg': 318,
        './assets/media/Lion_Guardians/04-MM8218_13-02-25_21369_lo.jpg': 21,
        './assets/media/Lion_Guardians/04-MM8218_13-02-25_21369.jpg': 499,
        './assets/media/Lion_Guardians/05-MM8218_13-03-01_23733_lo.jpg': 25,
        './assets/media/Lion_Guardians/05-MM8218_13-03-01_23733.jpg': 339,
        './assets/media/Lion_Guardians/06-MM8218_12-11-02_13512_lo.jpg': 20,
        './assets/media/Lion_Guardians/06-MM8218_12-11-02_13512.jpg': 322,
        
     // LIVING WITH LIONS
        './assets/media/LivingWithLions/01_MM8218_13-03-04_25154_lo.jpg': 31,
        './assets/media/LivingWithLions/01_MM8218_13-03-04_25154.jpg': 263,
        
     // PLAY
        './assets/media/play/01_MM7947_121213_252328_lo.jpg': 28,
        './assets/media/play/01_MM7947_121213_252328.jpg': 201,
        './assets/media/play/02_MM7947_120226_110893_lo.jpg': 17,
        './assets/media/play/02_MM7947_120226_110893.jpg': 100,
        './assets/media/play/03_MM7947_110918_047502_lo.jpg': 22,
        './assets/media/play/03_MM7947_110918_047502.jpg': 136,
        './assets/media/play/04_MM7947_120304_115216_lo.jpg': 18,
        './assets/media/play/04_MM7947_120304_115216.jpg': 78,
        './assets/media/play/05_MM7947_121014_177456_lo.jpg': 26,
        './assets/media/play/05_MM7947_121014_177456.jpg': 161,
        
     // PRIDE
        './assets/media/pride/01_MM7947_120309_123675_lo.jpg': 15, 
        './assets/media/pride/01_MM7947_120309_123675.jpg': 277,
        './assets/media/pride/02_MM7947_111010_073144ML_lo.jpg': 34, 
        './assets/media/pride/02_MM7947_111010_073144ML.jpg': 217,
        './assets/media/pride/03_MM7947_121013_176276_lo.jpg': 31,
        './assets/media/pride/03_MM7947_121013_176276.jpg': 277,
        './assets/media/pride/04_MM7947_120202_081714_lo.jpg': 22,
        './assets/media/pride/04_MM7947_120202_081714.jpg': 144,
        './assets/media/pride/05_MM7947_121110_214626_lo.jpg': 18,
        './assets/media/pride/05_MM7947_121110_214626.jpg': 254,
        './assets/media/pride/06_MM7947_120413_162277_lo.jpg': 22,
        './assets/media/pride/06_MM7947_120413_162277.jpg': 538,
     
     // ROBOT
        './assets/media/robot/01_MM7947_120209_093066_lo.jpg': 28,
        './assets/media/robot/01_MM7947_120209_093066.jpg': 202,
        './assets/media/robot/02_MM7947_120328_145813_lo.jpg': 40,
        './assets/media/robot/02_MM7947_120328_145813.jpg': 355,
        
     // SERENGETI
        './assets/media/serengeti/01_MM7947_121203_243958_lo.jpg': 34,
        './assets/media/serengeti/01_MM7947_121203_243958.jpg': 254,
        './assets/media/serengeti/02_Nichols_Michael_03_MM7947_110825_021475_lo.jpg': 31,
        './assets/media/serengeti/02_Nichols_Michael_03_MM7947_110825_021475.jpg': 210,
        './assets/media/serengeti/03_Nichols_Michael_04_MM7947_110830_027584_lo.jpg': 21,
        './assets/media/serengeti/03_Nichols_Michael_04_MM7947_110830_027584.jpg': 106,
        './assets/media/serengeti/04_Nichols_Michael_05_MM7947_121031_196357_lo.jpg': 13,
        './assets/media/serengeti/04_Nichols_Michael_05_MM7947_121031_196357.jpg': 71,
        './assets/media/serengeti/05_Nichols_Michael_01_MM7947_121108_210005_lo.jpg': 11,
        './assets/media/serengeti/05_Nichols_Michael_01_MM7947_121108_210005.jpg': 70,
        './assets/media/serengeti/06_MM7947_121110_215051_lo.jpg': 9,
        './assets/media/serengeti/06_MM7947_121110_215051.jpg': 50,
     
     // TRACKING LIONS
        './assets/media/tracking/01_MM7947_121102_197835_lo.jpg': 30, 
        './assets/media/tracking/01_MM7947_121102_197835.jpg': 204,
        './assets/media/tracking/02_MM7947_120306_118830_lo.jpg': 31,
        './assets/media/tracking/02_MM7947_120306_118830.jpg': 199,
        
     // TROPHY HUNTING
        './assets/media/TrophyHunting/01-MM8218_12-09-29_04020_lo.jpg': 27,
        './assets/media/TrophyHunting/01-MM8218_12-09-29_04020.jpg': 122,
        './assets/media/TrophyHunting/02-MM8218_13-02-20_19350_lo.jpg': 21,
        './assets/media/TrophyHunting/02-MM8218_13-02-20_19350.jpg': 261,
        './assets/media/TrophyHunting/03-MM8218_12-09-29_01949_lo.jpg': 24,
        './assets/media/TrophyHunting/03-MM8218_12-09-29_01949.jpg': 277,
        './assets/media/TrophyHunting/04-MM8218_12-10-19_06169_lo.jpg': 16,
        './assets/media/TrophyHunting/04-MM8218_12-10-19_06169.jpg': 232,
        './assets/media/TrophyHunting/05-MM8218_12-10-19_06774_lo.jpg': 21,
        './assets/media/TrophyHunting/05-MM8218_12-10-19_06774.jpg': 286,
        './assets/media/TrophyHunting/06-MM8218_12-10-19_08908_lo.jpg': 24,
        './assets/media/TrophyHunting/06-MM8218_12-10-19_08908.jpg': 388,
        
     // TWILIGHT
        './assets/media/twilight/01_MM7947_110928_057607_lo.jpg': 15,
        './assets/media/twilight/01_MM7947_110928_057607.jpg': 75,
        './assets/media/twilight/02_MM7947_120209_093193_lo.jpg': 25,
        './assets/media/twilight/02_MM7947_120209_093193.jpg': 135,
        './assets/media/twilight/03_MM7947_111011_074910_lo.jpg': 31,
        './assets/media/twilight/03_MM7947_111011_074910.jpg': 155,
        './assets/media/twilight/04_MM7947_111012_077650ML_lo.jpg': 15,
        './assets/media/twilight/04_MM7947_111012_077650ML.jpg': 115,
     
     // ZEBRA FEAST
        './assets/media/zebra_feast/MM7947_120404_150866ML_lo.jpg': 18,
        './assets/media/zebra_feast/MM7947_120404_150866ML.jpg': 94
    }
    
    
};