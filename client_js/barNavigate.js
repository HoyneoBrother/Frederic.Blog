
$("#photo-select").change(function(){

    var selected = $("#photo-select option:selected");
    var dataValue = $("#photo-select option:selected")[0].getAttribute("data");
    console.log("selected photo: " + dataValue);
	
	//Frederic website
	dataValue = 1444;

	openOnePhotoPage(dataValue);
	/*
    gtag('config', 'UA-110142101-1', {
        'page_title': 'PhotoPage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/PhotoSelected'
    });

    const PhotoPageURL = "/articles/photo/";
    $.get(PhotoPageURL + dataValue + ".photo", function (data) {

        //remove existing photos first
        $(".photo-page").remove();

         console.log("loaded Photo Page : " + data);
        
        var photoSection = $(".photo-block");
         var $elem = $.parseHTML(data);
         photoSection.append($elem);

         const imageMargin = 10;
         var initWidth = $('#Photo0').width() - imageMargin;
         console.log( "Init width = " + initWidth );

         loadPlaceholder(initWidth);
        
    });*/
});

function openOnePhotoPage( pageID ) {
	
    gtag('config', 'UA-110142101-1', {
        'page_title': 'PhotoPage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/PhotoSelected'
    });

    const PhotoPageURL = "/articles/photo/";
    $.get(PhotoPageURL + pageID + ".photo", function (data) {

        //remove existing photos first
        $(".photo-page").remove();

         console.log("loaded Photo Page : " + data);
        
        var photoSection = $(".photo-block");
         var $elem = $.parseHTML(data);
         photoSection.append($elem);

         const imageMargin = 10;
         var initWidth = $('#Photo0').width() - imageMargin;
         console.log( "Init width = " + initWidth );

         loadPlaceholder(initWidth);
        
    });
}

var photoLoaded = false;
function navPhoto() {
    showPhotoPage();

    if (typeof ga != "undefined") {

        gtag('config', 'UA-110142101-1', {
            'page_title': 'PhotoPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/PhotoPage'
        });
    }else{
        console.log("ga not ready navPhoto()")
    }
    
    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == photoLoaded )
    {
        console.log(" will load Photo Page");
        photoLoaded = true;
        
		/*
        $.get("/articles/photoIndex.txt", function (data) {

            $( function() {
                console.log("init menu action");

                var $indexElement = $.parseHTML(data);
                $("#photo-select").append($indexElement);
            } );
        })*/
		
		dataValue = 1444; //FredericDrawing
		openOnePhotoPage( dataValue );
    }
}

var experienceLoaded = false;
function navExperience(){
    showExperiencePage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToExperiencePage');

        gtag('config', 'UA-110142101-1', {
            'page_title': 'ExperiencePage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/ExperiencePage'
        });
    }else{
        console.log("ga not ready navExperience()")
    }

    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == experienceLoaded ){
        experienceLoaded = true;
        console.log( "load Experience page");

        $.get("/articles/experienceIndex.txt", function (data) {

            var yearSection = $(".experience-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();
            addToggleClick( yearSection )
        })
    }
}

var androidLoaded = false;
function navAndroid(){
    showAndroidPage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToAndroidPage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'AndroidPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/AndroidPage'
        });
    }else{
        console.log("ga not ready navAndroid()")
    }

    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == androidLoaded ){
        androidLoaded = true;
        console.log( "load Android Page");

        $.get("/articles/androidIndex.txt", function (data) {

            var yearSection = $(".android-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();

            addToggleClick( yearSection )
        })
    }
}

var iOSLoaded = false;
function naviOS(){
    showiOSPage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToiOSPage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'iOSPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/iOSPage'
        });
    }else{
        console.log("ga not ready naviOS()")
    }

    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == iOSLoaded ){
        iOSLoaded = true;
        console.log( "load iOS Page");

        $.get("/articles/iOSIndex.txt", function (data) {

            var yearSection = $(".iOS-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();
            addToggleClick( yearSection )
        })
    }
}

var designLoaded = false;
function navDesign(){
    showDesignPage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToDesignPage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'DesignPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/DesignPage'
        });
    }else{
        console.log("ga not ready navDesign()")
    }
    
    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == designLoaded ){
        designLoaded = true;
        console.log( "load Design Page");

        $.get("/articles/designIndex.txt", function (data) {

            var yearSection = $(".design-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();

            addToggleClick( yearSection )
        })
    }
}

var languageLoaded = false;
function navLanguage(){
    showLanguagePage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToLanguagePage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'LanguagePage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/LanguagePage'
        });
    }else{
        console.log("ga not ready navLanguage()")
    }

    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == languageLoaded ){
        languageLoaded = true;
        console.log( "load Language Page");

        $.get("/articles/languageIndex.txt", function (data) {

            var yearSection = $(".language-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();
            addToggleClick( yearSection )
        })
    }
}

var toolLoaded = false;
function navTool(){
    showToolPage();
    
    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToToolPage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'ToolPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/ToolPage'
        });
    }else{
        console.log("ga not ready navTool()")
    }
    
    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == toolLoaded ){
        toolLoaded = true;
        console.log( "load Tool Page");

        $.get("/articles/toolIndex.txt", function (data) {
            var yearSection = $(".tool-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();
            addToggleClick( yearSection )
        })
    }
}

var engineeringLoaded = false;
function navEngineering(){
    showEngineeringPage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToEngineeringPage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'EngineeringPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/EngineeringPage'
        });
    }else{
        console.log("ga not ready navEngineering()")
    }
    
    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == engineeringLoaded ){
        engineeringLoaded = true;
        console.log( "load Engineering Page");

        $.get("/articles/engineeringIndex.txt", function (data) {

            var yearSection = $(".engineering-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();
            addToggleClick( yearSection )
        })
    }
}

var newsLoaded = false;
function navNews(){
    showNewsPage();

    if (typeof ga != "undefined") {
        //ga('send', 'event', 'Navigation','ToNewsPage');
        gtag('config', 'UA-110142101-1', {
            'page_title': 'NewsPage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/NewsPage'
        });
    }else{
        console.log("ga not ready navNews()")
    }
    
    //scroll to top of the page
    window.scrollTo(0,0);

    if( false == newsLoaded ){
        newsLoaded = true;
        console.log( "load News Page");

        $.get("/articles/newsIndex.txt", function (data) {

            var yearSection = $(".news-block");
            var $elem = $.parseHTML(data);
            yearSection.append($elem);
            //addClickPopup();
            addToggleClick( yearSection )
        })
    }
}

function loadAnimate(){
    console.log("hit load event")

    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        console.log( i+ " found img :" + allimages[i]);

        if (allimages[i].getAttribute('data-src')) {
            console.log( i + " data-src img: " + allimages[i].getAttribute('data-src'));

            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));

            //$.get( allimages[i].getAttribute('data-src'), function (data) {

            //});
        }
    }
}

function initSidebarLink()
{
    $('#sidebar').load('sidebar.html',function(){
        console.log( "after loading the sidebar.html");

        /*
        document.getElementById('201').onclick = function () {
            console.log("nav Photo page");

            navPhoto();
        }*/

        document.getElementById('202').onclick = function () {
            console.log("nav Experience page");

            navExperience();
        }

        document.getElementById('203').onclick = function () {
            console.log("nav Android page");

            navAndroid();
        }

        document.getElementById('204').onclick = function () {
            console.log("nav iOS page");

            naviOS();
        }

        document.getElementById('205').onclick = function () {
            console.log("nav Design page");

            navDesign();
        }

        document.getElementById('206').onclick = function () {
            console.log("nav Language page");

            navLanguage();
        }

        document.getElementById('207').onclick = function () {
            console.log("nav tool page");

            navTool();
        }

        document.getElementById('208').onclick = function () {
            console.log("nav engineering page");

            navEngineering();
        }

        document.getElementById('209').onclick = function () {
            console.log("nav news page");

            navNews();
        }

        loadAnimate();
    });
}