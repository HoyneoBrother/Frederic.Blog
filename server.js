//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic(__dirname)).listen(8080, function(){
//    console.log('Server running on 8080...');
//});
'use strict';

var http = require('http');
var fs = require("fs");
var homePageHelper = require('./node_modules/homepage.js');
var archivePageHelper = require('./node_modules/archivepage.js');
const lessonPageHelper = require('./node_modules/lessonPage.js');
var myHelper = require('./node_modules/helper.js');
var emailHelper = require('./node_modules/emailHelper')

var port = process.env.PORT || 1337;

const homeURL = "articles/CurrentIndex.txt";
const archiveURL = "articles/archiveIndex.txt";
const iOSURL = "articles/iOSIndex.txt";
const photoURL = "articles/photoIndex.txt";
const experienceURL = "articles/experienceIndex.txt";
const androidURL = "articles/androidIndex.txt";
const designURL = "articles/designIndex.txt";
const languageURL = "articles/languageIndex.txt";
const toolURL = "articles/toolIndex.txt";
const engineeringURL = "articles/engineeringIndex.txt";
const newsURL = "articles/newsIndex.txt";
const photoPageURL = "articles/photo/";
const storyPageRequest ="page/blog.";

homePageHelper.buildHomePage( );

http.createServer(function(request, response) {

	//sendFileContent(response, request.url.toString().substring(1), "text/html");
	//return;

	console.dir(request.param);

	if (request.method == 'POST') {
        console.log("POST");
        var body = '';
        request.on('data', function (data) {
            body += data; //accumulate the data
            console.log("Partial body: " + body);
        });
        request.on('end', function () {
            console.log("Body: call sendMail : " + body);

            emailHelper.sendMail( body, function(result)
            {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(result);
                if( result == true ){
                    response.end('Your message has been sent. Thank you.');
                }
                else{
                    response.end('I am sorry, something wrong :(  Would you try again or contact me through facebook ?');
                }
            });
        });

        return;
    }

	var pathString = request.url.toString();
	//console.log( "Request URL : " + pathString);
	
	//if(request.url === "/index.html"){
	if(/^\/[0-9a-zA-Z,+_\/\.-]*\.html$/.test(pathString)){
		//sendFileContent(response, "./index.html", "text/html");
        sendFileContent(response, pathString.substring(1), "text/html");
		//sendHTMLFileContent(response, pathString.substring(1), "text/html");
	}
	else if(request.url === "/"){
		//response.writeHead(200, {'Content-Type': 'text/html'});
		//response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);

		//test only 2018-7-22
		//setTimeout( function(){
		//sendFileContent(response, "index.html", "text/html");}, 5000);
        sendFileContent(response, "index.html", "text/html");
	}
	else if(/^\/[0-9a-zA-Z_\/\.-]*\.js$/.test(pathString)){
		
		sendFileContent(response, pathString.substring(1), "text/javascript");
	}	
	else if(/^\/[0-9a-zA-Z_\/\.-]*\.css$/.test(pathString)){
		sendFileContent(response, pathString.substring(1), "text/css");
	}
	else if(/^\/[0-9a-zA-Z_\/\.-]*\.txt$/.test(pathString)){
        sendHTMLFileContent(response, pathString.substring(1), "text/plain");
	}
	else if(/^\/[0-9a-zA-Z_\/\.-]*\.photo$/.test(pathString)){
		sendHTMLFileContent(response, pathString.substring(1), "text/plain");
	}
	//Note: file name may contain bracket ( or ).
	else if(/^\/[0-9a-zA-Z_\(\)\/\.-]*\.(jpg|jpeg|JPG)$/.test(pathString)){
		sendFileContent(response, pathString.substring(1), "image/jpg");
	}
	else if(/^\/[0-9a-zA-Z_\/\.-]*\.(png)$/.test(pathString)){
		sendFileContent(response, pathString.substring(1), "image/png");
	}	
	else if(/^\/[0-9a-zA-Z_\/\.-]*\.(gif)$/.test(pathString)){		
		sendFileContent(response, pathString.substring(1), "image/gif");
	}
	else{

		const resPrefix = "resource/";

		var jsIndex = pathString.indexOf(".js?");
		var ttfIndex = pathString.indexOf(".ttf?");
		var woff2Index = pathString.indexOf(".woff2?");
		var woffIndex = pathString.indexOf(".woff?");
		var resIDIndex = pathString.indexOf(resPrefix);
		if( -1 < jsIndex ){			
			
			var newString = pathString.substring(1, jsIndex+3)
			sendFileContent(response, newString, "text/javascript");
		}
		else if( -1 < ttfIndex )
		{			
			var newString = pathString.substring(1, ttfIndex+4);
			console.log( "match ttf: " + newString);
			sendFileContent(response, newString, "application/font-sfnt");
		}
		else if( -1 < woffIndex )
		{			
			var newString = pathString.substring(1, woffIndex+5);
			console.log( "match woff : " + newString);
			sendFileContent(response, newString, "application/font-woff");
		}		
		else if( -1 < woff2Index )
		{			
			var newString = pathString.substring(1, woff2Index+6);
			//console.log( "match woff2: " + newString);
			sendFileContent(response, newString, "font/woff2");
		}
		else if( -1 < resIDIndex )
		{
			console.log( "Request resource: " + request.url );
			var ID = pathString.substring(resIDIndex + resPrefix.length);
			console.log( "resource ID : " + ID );
			sendArticleContent( response, ID);
		}
		else{			
			console.log("Requested URL is: " + request.url);
            console.log("Requested pathString is: " + pathString.substring(1).valueOf());

			response.end();
		}
	}
}).listen(port);

function sendHTMLFileContent(response, fileName, contentType){
	//console.log( ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Request URL : " + fileName);

	if( fileName.valueOf() == homeURL ) {
		console.log("find the URL : " + fileName );

		response.writeHead(200, {'Content-Type': contentType});
		response.write( homePageHelper.homePage());
		response.end();
	}
	else if( fileName.startsWith( storyPageRequest) ){	
        console.log("find story page URL : " + fileName );

		///page/story.2019A.txt?
		var storyYearID = fileName.substring(10,16)   //HERE IS THE PROBLEM
        sendStoryPage( storyYearID, response, contentType);
	}
	else if( fileName.valueOf() == archiveURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.ALL_TYPES(), contentType);
    }
    else if(fileName.valueOf() == photoURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.PHOTO_TYPE(), contentType);
    }
	else if(fileName.startsWith( photoPageURL )){
		console.log("find the photo page URL : " + fileName );

        //const prefix = "articles/photo/";
        //const txt = prefix + "123B.photo";
        var n1 = fileName.lastIndexOf("/");
        console.log("last index1: " + n1 );
        var n2 = fileName.lastIndexOf(".");
        console.log("last index2: " + n2 );
        var photoID = fileName.substr(n1+1,n2-(n1+1));
        console.log("name : " + photoID );
        
		sendTypedPage( response, myHelper.PHOTO_PAGE_TYPE(), contentType, photoID );
	}
    else if(fileName.valueOf() == experienceURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.EXPERIENCE_TYPE(), contentType);
    }
    else if(fileName.valueOf() == androidURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.ANDROID_TYPE(), contentType);
    }
    else if(fileName.valueOf() == iOSURL){
		console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.IOS_TYPE(), contentType);
	}
    else if(fileName.valueOf() == designURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.DESIGN_TYPE(), contentType);
    }
    else if(fileName.valueOf() == languageURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.LANGUAGE_TYPE(), contentType);
    }
    else if(fileName.valueOf() == toolURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.TOOLS_TYPE(), contentType);
    }
    else if(fileName.valueOf() == engineeringURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.ENGINEERING_TYPE(), contentType);
    }
    else if(fileName.valueOf() == newsURL){
        console.log("find the URL : " + fileName );
        sendTypedPage( response, myHelper.NEWS_TYPE(), contentType);
    }
	else {
		sendFileContent(response, fileName, contentType);
	}
}

function sendArticleContent( response, ID ){
	console.log("send for ID : " + ID );

	response.writeHead(200, {'Content-Type': "text/html"});
	var articleContent = homePageHelper.buildArticle( ID );
	//console.log( articleContent);
	response.write( articleContent );
	response.end();
}

function sendStoryPage( storyYearID, response, contentType){
    console.log("send lesson page: " + storyYearID  );

	//This function generates original story page with icon, title, time stamp.
    //var page = storyPageHelper.getStoryPage();

	var page = ""
	if( storyYearID == "txt"){
		page = lessonPageHelper.getLessonPage( lessonPageHelper.blogPageBar );
	}else{
		page = lessonPageHelper.getLessonPage( storyYearID );
	}

    //console.log("lesson page: " + page );

    response.writeHead(200, {'Content-Type': contentType});
    response.write( page );
    response.end();
}

function sendTypedPage( response, type, contentType, data ){
    console.log("send the type : " + type );

    var page = archivePageHelper.buildPage(type, data);
	response.writeHead(200, {'Content-Type': contentType});
    response.write( page );
    response.end();
}
/*
function sendTypedPage( response, page, contentType ){
    console.log("send the type page : " + page );

    response.writeHead(200, {'Content-Type': contentType});
    response.write( page );
    response.end();
}*/

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
			console.log("404 Not Found: " + fileName + " , " + contentType);
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}