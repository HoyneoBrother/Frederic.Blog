
//import Chart from 'chart.js/auto'

//var sql = require('./../sql.js');
var storyLoaded = false;
function navStory() {   
    showStoryPage();

    gtag('config', 'UA-110142101-1', {
        'page_title': 'StoryPage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/Blog'
    });
	
	//new wather page
	if (false == storyLoaded) {  
				
		storyLoaded = true;
				
		$.get("/page/blog.txt", function (data) {   //this is scrolling bar in story page - weather
            console.log("blog.txt returned: "  + data )			
			//const yValues = data.split(",");
			
			let dataFromServer = JSON.parse(data);
			
			let temperatureArray = [];
			let furnaceHours = [];
			
			for (const dataPoint of dataFromServer) {
				console.log(dataPoint);
				
				temperatureArray.push({x:dataPoint.date, y:parseInt(dataPoint.temperature, 10)});
				furnaceHours.push({x:dataPoint.date, y:parseFloat(dataPoint.furnaceHour)});
			}			
			
			//var temperatureArray = [{x:'2026-02-01',y:10},{x:'2026-02-15',y:15},{x:'2026-02-28',y:8}];
				
			var storySection = $(".story-block");
			var $elem = $.parseHTML("<div><H3>2026 Winter Furnace Record</H3><br><canvas id=\"weatherChart\"></canvas></div>");
			storySection.append( $elem ); 		

			const weatherCanvas = document.getElementById('weatherChart');
			weatherChart = generateChart(weatherCanvas, "Outdoor Temperature v.s. Furnace Time", temperatureArray, furnaceHours );	
			weatherChart.resize($("weahterChart").parent().width(),200); //<< useless, the width may be controlled by infrastructure automatically.
		});
	}	

	//the following is the original story page
    /*if (false == storyLoaded) {
        console.log("load Story Page");

        $.get("/page/blog.txt", function (data) {   //this is scrolling bar in story page - weather
            console.log("blog bar returned. " )

            var yearSection = $(".story-block");
            var $elem = $.parseHTML(data);
            //console.log("client story page: " + data );
            yearSection.append( $elem );

            storyLoaded = true;

            //bind click action to select blog year
            $('#priorityscroll li').click(function() {
                console.log("li ID : " + this.id )
                getBlogPage( this.id)
            });

            //add mouse interaction for desktop browser by priorityscrolling.js
            mouseHover()

            //by default get latest blog page.
            //The const name is defined in lessonPage.js

            //NOTE: update this every month. This hard coded value shall always point to latest blog month.
            getBlogPage( "201911")
        });
    }*/
}

function getBlogPage( id ){
    console.log("getBlogPage: " + id )

    gtag('config', 'UA-110142101-1', {
        'page_title': 'BlogPage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/Blog'
    });

    $.get("/page/blog." + id + ".txt", function (data) {
        console.log("blog returned. ")

        var blogSection = $("#blogSection");
        if( blogSection.length > 0 ){
            console.log("remove existing blog content first, before adding new")
            blogSection.remove();
        }

        var yearSection = $(".story-block");
        var $elem = $.parseHTML(data);   // weather replace this with new temperature code temperature Blog
        yearSection.append($elem);
    });
}

var archiveLoaded = false;
function navArchive( callbackFunction ) {
    showArchivePage();

    gtag('config', 'UA-110142101-1', {
        'page_title': 'ArchivePage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/Archive'
    });

    if (false == archiveLoaded) {
        console.log("load Archieve Page");
        archiveLoaded = true;
        $.get("/articles/archiveIndex.txt", function (data) {

            var yearSection = $(".archive-block");
            var $elem = $.parseHTML(data);
            
            yearSection.append($elem);

            if( callbackFunction ){
                callbackFunction();
            }

            addToggleClick( yearSection )

        });
    }
}

var HomeLoaded = false;
function navHome( callbackFunction ) {
    showHomePage();

    if (typeof ga != "undefined") {

        gtag('config', 'UA-110142101-1', {
            'page_title': 'HomePage',
            'page_location': 'ceriseguo.azurewebsites.net',
            'page_path': '/HomePage'
        });

    }else{
        console.log("ga not ready navHome()")
    }

    if (false == HomeLoaded) {
        console.log("load Home Page");
        HomeLoaded = true;
        $('#aboutme').load('/server_html/aboutme.html');

        $.get('/articles/CurrentIndex.txt', function (data) {
            var bodySection = $('#body-section');
            var $elem = $.parseHTML(data);
            bodySection.append($elem);

            console.log("will hide loading text");
            if( callbackFunction ){
                console.log("call to hide loading text");
                callbackFunction();
            }

            //add click event to each article
            linkCategory()
			
			//add Go-To-Archive link at the bottom of home screen
			var $GoToArchive = $.parseHTML('<div id="303" class="GoToArchive"><hr><br><a href= "#"  ><b>Would you like to see more ? Let\'s go to History Archive</b></a><br><br>');
			bodySection.append($GoToArchive);
			
			document.getElementById('303').onclick = function () {
				console.log("nav archive page");

				navArchive( function(){
					console.log("hide the loading text now.")
					$('#loadingArchive').hide();
				} );
			}
			
        });    
    }
}

var AboutLoaded = false;
function navAbout() {
    showAboutPage();

    gtag('config', 'UA-110142101-1', {
        'page_title': 'AboutPage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/AboutPage'
    });

    if (false == AboutLoaded) {
        console.log("load About Page");
        AboutLoaded = true;
        $("#About-Section").load("/about.html", function (response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error : " + xhr;
                alert(msg);
            }
        });
    }
}

var contactLoaded = false;
function navContact() {
    showContactPage();

    gtag('config', 'UA-110142101-1', {
        'page_title': 'ContactPage',
        'page_location': 'ceriseguo.azurewebsites.net',
        'page_path': '/ContactPage'
    });

    if (false == contactLoaded) {
        console.log("load Contact Page");
        contactLoaded = true;

        $("#Contact-Section").load("/contact.html", function (response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error : " + xhr;
                alert(msg);
            }
            else{
                $( "#ContactMe" ).click(function() {
                    console.log("email button clicked");

                    console.log('begin');
                    var http = new XMLHttpRequest();

                    ///new test code to send data to my azure REST server

                    //CORS rule - official tutorial
                    //https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-rest-api
/*
                    newItem = {
                        'Id': 0, //real value will be filled by server
                        "Name": "Oct6.A",
                        "IsComplete": false
                    }

                    var params = JSON.stringify(newItem);

                    //http.open("POST", "http://127.0.0.1:61524/api/Todo/", true); //triggered good

                    //http.setRequestHeader( 'Access-Control-Allow-Origin', '*');

                    http.open("POST", "https://restapiapp.azurewebsites.net/api/Todo/", true);
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    http.onreadystatechange = function() {
                        console.log('onreadystatechange');
                        if (http.readyState == 4 && http.status == 200) {
                            console.log("bad http: " + http.responseText);
                            //alert(http.responseText);
                        }
                        else {
                            console.log('readyState=' + http.readyState + ', status: ' + http.status);
                        }
                    }
                    http.send(params);
                    console.log("finish http post test")
                    return;
*/
                    ///end new test code

                    var contactName = $("#contact_username").val();
                    console.log( contactName );
                    var contactEmail = $("#contact_email").val();
                    console.log( contactEmail );
                    var contactMessage = $("#contact_message").val();
                    console.log( contactMessage );

                    var fullMesage = contactName + "\r\n\r\n" + contactEmail + "\r\n\r\n" + contactMessage;

                    newItem = {
                        'Id': 0, //real value will be filled by server
                        "Name": fullMesage,
                        "IsComplete": false
                    }

                    var messageToServer = JSON.stringify(newItem);

                    //http.open("POST", "http://ceriseguo.azurewebsites.net", true); //old email library
                    //http.open("POST", "http://127.0.0.1:1337", true); //use local server
                    http.open("POST", "https://restapiapp.azurewebsites.net/api/Todo/", true);

                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    //http.setRequestHeader("Content-length", params.length);
                    //http.setRequestHeader("Connection", "close");

                    http.onreadystatechange = function() {
                        console.log('onreadystatechange');
                        if (http.readyState == 4 && http.status == 200) {
                            alert("Your message has been sent. Thanks.");
                        }
                        else {
                            console.log('readyState=' + http.readyState + ', status: ' + http.status);
                            //alert("failed to send email.");

                            if( http.status >= 400){
                                alert("failed to send message.");
                            }
                        }
                    }

                    console.log('sending...')
                    http.send(messageToServer);
                    console.log('end');
                });
            }
        });
    }
}

function initIndexLink() {
    $('#indexbar').load('indexbar.html', function () {
        //after loading the indexbar.html

        //index page
        document.getElementById('101').onclick = function () {
            console.log("nav Home page");

            navHome();
        }

        //stories page
        document.getElementById('102').onclick = function () {
            console.log("nav blog page");

            navStory();
        }

        //archive page
        document.getElementById('103').onclick = function () {
            console.log("nav archive page");

            navArchive( function(){
                console.log("hide the loading text now.")
                $('#loadingArchive').hide();
            } );
        }

        //about page
        document.getElementById('104').onclick = function () {
            console.log("nav about page");

            navAbout();
        }

        //contact page
        document.getElementById('105').onclick = function () {
            console.log("nav contact page");

            navContact();
        }

        //Photo page
        document.getElementById('106').onclick = function () {
            console.log("nav Photo page");

            navPhoto();
        }
    });
}

