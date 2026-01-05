

//Width and Height below are external boundary size.
//The internal boundary size is defined in index.html, iframe.

function anchorScr( ID ) {
    /*jQuery('a').click(function (event) {
        var id = $(this).attr("id");
        alert(id);
    });*/
    console.log( "anchorSrc : " + ID );
}

var photoPathes = [];

function loadPlaceholder( initSinglePhotoWidth) {
    console.log("enter loadPlaceholder : " + initSinglePhotoWidth);

    photoPathes = []; //reset before using

    //var placeHolderImg = new Image();
    //placeHolderImg.onload = function(){
    //    console.log("place holder image is loaded");

        var totalCount = 0;
        $( ".photothumb" ).each(function( index ) {
            console.log( index + ": " + $( this ).attr("data") );
            photoPathes[totalCount] = $( this ).attr("data");

            ++totalCount;
        });

        console.log( "total photo count: " + totalCount );
        loadPicture(0, totalCount, initSinglePhotoWidth)
   // }
    //placeHolderImg.src = "./photos/badlands20170901/20170905_163227-s.jpg"
}
function loadPicture( imageIndex, totalPhotoCount, initSinglePhotoWidth ) {
    console.log("loadPicture : " + imageIndex + " of " + totalPhotoCount );
    var downloadingImage = new Image();

    //var imageLoadCount = imageIndex;

    downloadingImage.onload = function () {
        console.log("image has been loaded :" + imageIndex );

        //resize image to fit the place for it.
        var actualWidth = downloadingImage.width;
        downloadingImage.width = initSinglePhotoWidth;
        downloadingImage.height = (initSinglePhotoWidth/actualWidth)*downloadingImage.height;
        console.log(  initSinglePhotoWidth + " , " + actualWidth + " , " + downloadingImage.height  );

        console.log( "image count = " + imageIndex );
        //$('#Photo' + imageIndex).html("<a href=\"" + photoPathes[imageIndex] + "\">dlink</a>");
        $('#Photo' + imageIndex).append(downloadingImage);
        //$('#Photo' + imageIndex).append("<a href=\"" + photoPathes[imageIndex] + "\">&nbsp&nbsp&nbspdownload link</a>");

        var imageID = "img" + imageIndex;
        var string1 = "<a href=\"#\" id=\"";
        var string2 = "\">&nbsp&nbsp&nbspopen full size</a>";

        var $elem = $.parseHTML( string1 + imageID + string2 );

        //$('#Photo' + imageIndex).append("<a href=\"#\" class=\"abcd\">&nbsp&nbsp&nbspopen full size</a>");
        $('#Photo' + imageIndex).append($elem );

        /*
        $elem.click(function(event) {
         event.preventDefault();
         event.stopPropagation();
         window.open(photoPathes[imageIndex], '_blank');
         })*/

        var imgSelector = "#" + imageID;
        $(imgSelector).click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(photoPathes[imageIndex], '_blank');
        })

        //imageLoadCount++;

        if( imageIndex < (totalPhotoCount-1) ){
            loadPicture(imageIndex+1, totalPhotoCount, initSinglePhotoWidth)
        }
    }
    //downloadingImage.src = "./photos/badlands20170901/20170905_162501.jpg";
    var thumbFileName = photoPathes[imageIndex].replace(".jpg", "-s.jpg");
    console.log( "image : " + photoPathes[imageIndex] );
    console.log( "image thumb: " + thumbFileName );

    downloadingImage.src = thumbFileName;
}

const TYPE_PHOTO_ID = "PhotoTypeID";
const TYPE_EXPERIENCE_ID = "ExperienceTypeID";
const TYPE_ANDROID_ID = "AndroidTypeID";
const TYPE_IOS_ID = "IOSTypeID";
const TYPE_DESIGN_ID = "DesignTypeID";
const TYPE_LANGUAGE_ID = "LanguageTypeID";
const TYPE_TOOLS_ID = "ToolTypeID";
const TYPE_ENGINEERING_ID = "EngineeringTypeID";
const TYPE_NEWS_ID = "NewsTypeID";

const TYPE_PHOTO_CLASS = "photo_class";
const TYPE_EXPERIENCE_CLASS = "experience_cat";
const TYPE_ANDROID_CLASS = "android_cat";
const TYPE_IOS_CLASS = "ios_cat";
const TYPE_DESIGN_CLASS = "design_cat";
const TYPE_LANGUAGE_CLASS = "language_cat";
const TYPE_TOOLS_CLASS = "tool_cat";
const TYPE_ENGINEERING_CLASS = "engineering_cat";
const TYPE_NEWS_CLASS = "news_cat";

function linkCategory2( parentNode ){
    console.log("enter linkCategory2()")

    var item1 = $( "." + TYPE_NEWS_CLASS );

    parentNode.find( item1 ).click(function(event) {
        console.log("news class is clicked.")

        event.preventDefault();

        navNews();
    })

    item1 = $( "." + TYPE_ENGINEERING_CLASS );
    //$("." + TYPE_ENGINEERING_CLASS ).click(function(event) {
    parentNode.find( item1 ).click(function(event) {
        console.log("engineering class is clicked.")

        event.preventDefault();

        navEngineering();
    })

    //$("." + TYPE_TOOLS_CLASS ).click(function(event) {
    item1 = $( "." + TYPE_TOOLS_CLASS );
    parentNode.find( item1 ).click(function(event) {
        console.log("tool class is clicked.")

        event.preventDefault();

        navTool();
    })

    //$("." + TYPE_LANGUAGE_CLASS ).click(function(event) {
    item1 = $( "." + TYPE_LANGUAGE_CLASS );
    parentNode.find( item1 ).click(function(event) {
        console.log("language class is clicked.")

        event.preventDefault();

        navLanguage();
    })

    item1 = $( "." + TYPE_DESIGN_CLASS );
    //$("." + TYPE_DESIGN_CLASS ).click(function(event) {
    parentNode.find( item1 ).click(function(event) {
        console.log("design class is clicked.")

        event.preventDefault();

        navDesign();
    })

    //$("." + TYPE_IOS_CLASS ).click(function(event) {
    item1 = $( "." + TYPE_IOS_CLASS );
    parentNode.find( item1 ).click(function(event) {
        console.log("ios class is clicked.")

        event.preventDefault();

        naviOS();
    })

    //$("." + TYPE_EXPERIENCE_CLASS ).click(function(event) {
    item1 = $( "." + TYPE_EXPERIENCE_CLASS );
    parentNode.find( item1 ).click(function(event) {
        console.log("experience class is clicked.")

        event.preventDefault();

        navExperience();
    })

    //$("." + TYPE_ANDROID_CLASS ).click(function(event) {
    item1 = $( "." + TYPE_ANDROID_CLASS );
    parentNode.find( item1 ).click(function(event) {
        console.log("android class is clicked.")

        event.preventDefault();

        navAndroid();
    })

    //$("." + TYPE_PHOTO_CLASS ).click(function(event) {
    item1 = $( "." + TYPE_PHOTO_CLASS );
    parentNode.find( item1 ).click(function(event) {
        console.log("photo class is clicked.")

        event.preventDefault();

        navPhoto();
    })
}

function linkCategory(){
    console.log("enter linkCategory()")

    $("." + TYPE_NEWS_CLASS ).click(function(event) {
        console.log("news class is clicked.")

        event.preventDefault();

        navNews();
    })

    $("." + TYPE_ENGINEERING_CLASS ).click(function(event) {
        console.log("engineering class is clicked.")

        event.preventDefault();

        navEngineering();
    })

    $("." + TYPE_TOOLS_CLASS ).click(function(event) {
        console.log("tool class is clicked.")

        event.preventDefault();

        navTool();
    })

    $("." + TYPE_LANGUAGE_CLASS ).click(function(event) {
        console.log("language class is clicked.")

        event.preventDefault();

        navLanguage();
    })

    $("." + TYPE_DESIGN_CLASS ).click(function(event) {
        console.log("design class is clicked.")

        event.preventDefault();

        navDesign();
    })

    $("." + TYPE_IOS_CLASS ).click(function(event) {
        console.log("ios class is clicked.")

        event.preventDefault();

        naviOS();
    })

    $("." + TYPE_EXPERIENCE_CLASS ).click(function(event) {
        console.log("experience class is clicked.")

        event.preventDefault();

        navExperience();
    })

    $("." + TYPE_ANDROID_CLASS ).click(function(event) {
        console.log("android class is clicked.")

        event.preventDefault();

        navAndroid();
    })

    $("." + TYPE_PHOTO_CLASS ).click(function(event) {
        console.log("photo class is clicked.")

        event.preventDefault();

        navPhoto();
    })
}

function addToggleClick( parentElement )
{
    parentElement.find('ul > .archive-list-item ul').hide();

    var bElement = parentElement.find('ul > .archive-list-item a');
    //$('ul > .archive-list-item a').click(function() {
    bElement.click(function() {
        var loadingElement = $(this).parent().find('ul');
        if( 0 != loadingElement.length ){
            console.log("first time clicking the element");
            //first time to open this item.
            //show loading message.

            //put the function(event) here to avoid scrolling up to top of the page.
            loadingElement.toggle(function(event) {
                //event.preventDefault();
                //event.stopPropagation();
                return false;
            });

            var parentNode = $(this).parent();

            console.log( "resource ID : "+ this.getAttribute("data"));

            $.get(this.getAttribute("data"), function (data) {
                parentNode.append(data);
                loadingElement.remove();
                console.log( "resource ID back : " + data);

                //the following linkCatetory() works, but need to narrow down the scope to improve performance
                linkCategory2( parentNode );
            });
        }
        else{
            var itemDetailElement = $(this).parent().find('.one-archive-item-detail');
            if( itemDetailElement == null ){
                console.error( "empty item detail :" + this.toString());
                return;
            }
            console.log("toggle item detail");

            //put the function(event) here to avoid scrolling up to top of the page.
            itemDetailElement.toggle(function(event) {
                //event.preventDefault();
                //event.stopPropagation();
                return false;
            });

        }
    });
}

function addClickPopup(){
    $(".pop-dialog").click(function () {

        var articleURL = $(this).attr("href");
        console.log( "ths URL is : " + articleURL );

        //$("#the-dialog").attr('src', $(this).attr("href"));

        var internalWidth = 400; //$("#the-dialog").width();
        var internalHeight = 500; //$("#the-dialog").height();

        console.log( "dialog width = " + internalWidth )

        $("#dialog-Div").dialog({
            title:"Hello World : " + $(this).attr("href"),
            width: internalWidth+40,
            height: internalHeight+80,
            modal: true,
            open: function() {
                console.log( "dialog opened" );

                $(this).load (articleURL, function(response, status, xhr) {
                    console.log("article was performed.");

                    $("#"+ TYPE_PHOTO_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('201').onclick();
                    });

                    $("#"+ TYPE_EXPERIENCE_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('202').onclick();
                    });

                    $("#"+ TYPE_ANDROID_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('203').onclick();
                    });

                    $("#"+ TYPE_IOS_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('204').onclick();
                    });

                    $("#"+ TYPE_DESIGN_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('205').onclick();
                    });

                    $("#"+ TYPE_LANGUAGE_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('206').onclick();
                    });

                    $("#"+ TYPE_TOOLS_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('207').onclick();
                    });

                    $("#"+ TYPE_ENGINEERING_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('208').onclick();
                    });

                    $("#"+ TYPE_NEWS_ID).click(function (event) {
                        console.log("click arch8");
                        $("#dialog-Div").dialog( "close" );
                        document.getElementById('209').onclick();
                    });
                });
            },
            close: function () {
                console.log("close dialog");
            }
        });
        return false;
    });
}

function showPhotoPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Android-Section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Photo-section').show();
}

function showContactPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Android-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Contact-Section').show();
}

function showAboutPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#Android-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#About-Section').show();
}

function showHomePage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Android-Section').hide();
    $('#Photo-section').hide();
    $("#Story-Section").hide();
    $("#About-Section").hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#body-section').show();
}

function showArchivePage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Android-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $("#About-Section").hide();
    $('#Contact-Section').hide();
    $('#Experience-Section').hide();
    $('#Archive-Section').show();
}

function showStoryPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Android-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#About-Section").hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $("#Story-Section").show();
}

function showExperiencePage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Android-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $("#About-Section").hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').show();
}

function showAndroidPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#iOS-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').show();
}

function showiOSPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Design-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').hide();
    $('#iOS-Section').show();
}

function showDesignPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Language-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').hide();
    $('#iOS-Section').hide();
    $('#Design-Section').show();
}

function showLanguagePage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Tool-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').hide();
    $('#iOS-Section').hide();
    $('#Design-Section').hide();
    $('#Language-Section').show();
}

function showToolPage()
{
    $('#News-Section').hide();
    $('#Engineering-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').hide();
    $('#iOS-Section').hide();
    $('#Design-Section').hide();
    $('#Language-Section').hide();
    $('#Tool-Section').show();
}

function showEngineeringPage()
{
    $('#News-Section').hide();
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').hide();
    $('#iOS-Section').hide();
    $('#Design-Section').hide();
    $('#Language-Section').hide();
    $('#Tool-Section').hide();
    $('#Engineering-Section').show();
}

function showNewsPage()
{
    $('#Photo-section').hide();
    $('#body-section').hide();
    $("#Story-Section").hide();
    $('#About-Section').hide();
    $('#Contact-Section').hide();
    $('#Archive-Section').hide();
    $('#Experience-Section').hide();
    $('#Android-Section').hide();
    $('#iOS-Section').hide();
    $('#Design-Section').hide();
    $('#Language-Section').hide();
    $('#Tool-Section').hide();
    $('#Engineering-Section').hide();
    $('#News-Section').show();
}

function parseFileName(fileName) {
    fileName = fileName.replace(/(\r\n|\n|\r)/gm, "");

    var nStart = fileName.lastIndexOf("/") + 1;
    var nEnd = fileName.lastIndexOf(".");
    fileName = fileName.substring(nStart, nEnd);
    fileName = fileName.replace(/-/g, " ");

    return fileName;
}

function AppendMonth(element, indexPath) {
    $.get(indexPath + "/index.txt", function (data) {
        var files = data.split('\n');
        //console.log(files);

        //get short date string like "2016 Jun" for timeline node.
        var nStart = indexPath.lastIndexOf("/") + 1;
        var DateString = indexPath.substring(nStart, indexPath.length);
        DateString = DateString.replace(/-/g, " ");

        var $listElement = $("<ul/>", {'style': 'list-style-type:disc'});
        for (var i = 0; i < files.length; i++) {

            var title = parseFileName(files[i]);

            var aLink = $("<a/>", {'href': files[i], "class": "pop-dialog"}).append(title);
            aLink.click(function () {
                $("#the-dialog").attr('src', $(this).attr("href"));
                $("#dialog-Div").dialog({
                    width: 400,
                    height: 450,
                    modal: true,
                    close: function () {
                        $("#thedialog").attr('src', "about:blank");
                    }
                });
                return false;
            });

            $listElement.append(
                $("<li/>").append(aLink));
        }

        //finally add month list
        var $elem = $('<div/>', {'class': 'year'}).append(
            $("<p/>", {'class': 'meta-year date'}).append(
                $("<strong/>").append(DateString))).append($listElement);
        $(element).append($elem);
    });
}

