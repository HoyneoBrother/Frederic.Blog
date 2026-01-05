
//var testS = "/libs/jquery/jquery-1.10.2.js";
var testS = "/client_js/libs/jquery/jquery-1.10.2.js";  //^\/[0-9a-zA-Z\/\.-]*\.js$/

testS = "/_the_mes/cerise/js/jquery.easing-1.3.js";   // /^\/[0-9a-zA-Z_\/\.-]*\.js$/
	
testS = "/_themes/cerise/js/adapt.min.js?_=1495074789389";

testS = "/articles/2016-Aug/RAD-Studio-Delphi-C++-Builder.html";
console.log( testS );

	//if(/^\/[0-9a-zA-Z\/\.-]*\.js$/.test(testS.toString())){
	//if(/^\/[.js\?_=]+$/.test(testS.toString())){
	//var nIndex = testS.indexOf(".js?");
	//if( -1 < nIndex ){
	if(/^\/[0-9a-zA-Z,+_\/\.-]*\.html$/.test(testS)){		
		//var newString = testS.substring(0, nIndex+3)
		//console.log( "match : " + newString);
		console.log( "match ");
	}
	else
	{
		console.log("not match")
	}

function testDB1()
{
	var db = new SQL.Database();
	sqlstr = "CREATE TABLE hello (a int, b char);";
	sqlstr += "INSERT INTO hello VALUES (0, 'hello');"
	sqlstr += "INSERT INTO hello VALUES (1, 'world');"
	db.run(sqlstr); // Run the query without returning anything

	var res = db.exec("SELECT * FROM hello");
	var res2 = JSON.stringify(res);
	console.log("db1 : " + res);
	console.log("db2 : " + res2);

	console.log("db3 : " + res[0].values);

	console.log("db4 : " + res[0].values[0]);

	console.log("db5 : " + res[0].values[0][1]);

	var resultStr = res[0].values[0][1];
	db.close();
}

function getMonthShortName( month ){
    switch (month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
            console.log( "unexpect month number.")
    }
    return "";
}

const TYPE_PHOTO = 0x1;
const TYPE_PHOTO_NAME = "Photo";
const TYPE_PHOTO_URL = "/stories/categories/photo";
const TYPE_EXPERIENCE = 0x2;
const TYPE_EXPERIENCE_NAME = "Experience";
const TYPE_EXPERIENCE_URL = "/stories/categories/experience";
const TYPE_ANDROID = 0x4;
const TYPE_ANDROID_NAME = "Android"
const TYPE_ANDROID_URL = "/articles/categories/Android";
const TYPE_IOS = 0x8;
const TYPE_IOS_NAME = "iOS";
const TYPE_IOS_URL = "/articles/categories/iOS";
const TYPE_DESIGN = 0x10;
const TYPE_DESIGN_NAME = "Design";
const TYPE_DESIGN_URL = "/articles/categories/Design";
const TYPE_LANGUAGE = 0x20;
const TYPE_LANGUAGE_NAME = "Language";
const TYPE_LANGUAGE_URL = "/articles/categories/Language";
const TYPE_TOOLS = 0x40;
const TYPE_TOOLS_NAME = "Tools";
const TYPE_TOOLS_URL = "/articles/categories/Tool";
const TYPE_ENGINEERING = 0x80;
const TYPE_ENGINEERING_NAME = "Engineering";
const TYPE_ENGINEERING_URL = "/articles/categories/engineering";
const TYPE_NEWS = 0x100;
const TYPE_NEWS_NAME = "News";
const TYPE_NEWS_URL = "/articles/categories/news";

const fillintypereference = "Fill-in-Type-Reference-Path";
const fillintypename = "fill-in-type-name";

function getTypes( data ){
    var types = "";
    if( TYPE_PHOTO & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_PHOTO_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_PHOTO_NAME);
        types += typeHTML;
    }
    if( TYPE_EXPERIENCE & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_EXPERIENCE_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_EXPERIENCE_NAME);
        types += typeHTML;
    }
    if( TYPE_ANDROID & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_ANDROID_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_ANDROID_NAME);
        types += typeHTML;
    }
    if( TYPE_IOS & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_IOS_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_IOS_NAME);
        types += typeHTML;
    }
    if( TYPE_DESIGN & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_DESIGN_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_DESIGN_NAME);
        types += typeHTML;
    }
    if( TYPE_LANGUAGE & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_LANGUAGE_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_LANGUAGE_NAME);
        types += typeHTML;
    }
    if( TYPE_TOOLS & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_TOOLS_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_TOOLS_NAME);
        types += typeHTML;
    }
    if( TYPE_ENGINEERING & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_ENGINEERING_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_ENGINEERING_NAME);
        types += typeHTML;
    }
    if( TYPE_NEWS & data ){
        if( 0 < types.length ){
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_NEWS_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_NEWS_NAME);
        types += typeHTML;
    }

    return types;
}

var db = new SQL.Database();
function prepareDB()
{
	var sqlstr = "CREATE TABLE articles ( \
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, \
		category	INTEGER NOT NULL, \
		year	INTEGER NOT NULL, \
		month	INTEGER NOT NULL, \
		day	INTEGER NOT NULL, \
		title	TEXT NOT NULL, \
		detail	TEXT NOT NULL, \
		links	TEXT NOT NULL, \
		image	BLOB );";

	sqlstr += "INSERT INTO articles (category, year, month, day, title, detail, links) \
	VALUES ( 12, 2016, 5, 30, 'my title1', 'my detail 5A', 'www.google12.com');";

    sqlstr += "INSERT INTO articles (category, year, month, day, title, detail, links) \
	VALUES ( 8, 2016, 5, 30, 'my title1', 'my detail 5B', 'www.google4.com');";

	sqlstr += "INSERT INTO articles (category, year, month, day, title, detail, links) \
	VALUES ( 8, 2016, 9, 22, 'my title2', 'my detail 8A', 'www.apple8A.com');";

    sqlstr += "INSERT INTO articles (category, year, month, day, title, detail, links) \
	VALUES ( 8, 2016, 9, 22, 'my title2', 'my detail 8B', 'www.apple8B.com');";

    sqlstr += "INSERT INTO articles (category, year, month, day, title, detail, links) \
	VALUES ( 9, 2017, 9, 22, 'my title2', 'my detail 9', 'www.apple9.com');";

    sqlstr += "INSERT INTO articles (category, year, month, day, title, detail, links) \
	VALUES ( 1, 2016, 9, 22, 'my title2', 'my detail 2', 'www.apple1.com');";

	db.run(sqlstr);
}

function loadArticleTemplate1(){
    return "<> &lt;header&gt; \
        &lt;p class='meta date'&gt; \
        &lt;time class='pubdate updated' datetime='fill-in-datetime'&gt;&lt;strong&gt;fill-in-monthdate&lt;/strong&gt;&lt;br/&gt;fill-in-year \
        &lt;/time&gt; \
        &lt;/p&gt; \
        &lt;h2 class='entry-title'&gt;fill-in-title&lt;/h2&gt; \
        &lt;div class='meta'&gt; \
        &lt;a href='Fill-in-Type-Reference-Path' rel='noreferrer' target='_blank'&gt;fill-in-type-name&lt;/a&gt;&lt;/div&gt; \
        &lt;/header&gt; \
        &lt;br&gt; \
        fill-in-detail \
        &lt;/br&gt;&lt;a \
    href='fill-in-external-link' rel='noreferrer' target='_blank' \
    title='Original link'&gt;Original Link&lt;/a&gt;&lt;/br&gt; \
    &lt;br/&gt; \
    &lt;/p&gt;"
};

function getArticleTypes(typeValue, typeTemplate)
{
    //console.log( "data : " + data);

    var types = "";
    if (TYPE_PHOTO & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_PHOTO_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_PHOTO_NAME);
        types += typeHTML;
    }
    if (TYPE_EXPERIENCE & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_EXPERIENCE_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_EXPERIENCE_NAME);
        types += typeHTML;
    }
    if (TYPE_ANDROID & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_ANDROID_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_ANDROID_NAME);
        types += typeHTML;
    }
    if (TYPE_IOS & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_IOS_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_IOS_NAME);
        types += typeHTML;
    }
    if (TYPE_DESIGN & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_DESIGN_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_DESIGN_NAME);
        types += typeHTML;
    }
    if (TYPE_LANGUAGE & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_LANGUAGE_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_LANGUAGE_NAME);
        types += typeHTML;
    }
    if (TYPE_TOOLS & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_TOOLS_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_TOOLS_NAME);
        types += typeHTML;
    }
    if (TYPE_ENGINEERING & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_ENGINEERING_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_ENGINEERING_NAME);
        types += typeHTML;
    }
    if (TYPE_NEWS & typeValue) {
        if (0 < types.length) {
            types += ","
        }
        var typeHTML = typeTemplate.replace(fillintypereference, TYPE_NEWS_URL);
        typeHTML = typeHTML.replace(fillintypename, TYPE_NEWS_NAME);
        types += typeHTML;
    }
    //console.log( "type : " + types );
    return types;
};


function loadTypeTemplate(){
    return "<a href='fill-in-ext-link' rel='noreferrer' target='_blank' title='Original link'>Original Link</a>";
}

function loadLinkTemplate(){
    return "<a href='Fill-in-Type-Reference-Path' rel='noreferrer' target='_blank'>fill-in-type-name</a>";
}

function loadImageTemplate(){
    return "<img src='fin-base64' />";
}

function loadArchiveItemTemplate(){
    return "<li><a href='/articles/2016-Nov/How-Not-to-Crash-No1.html' class='pop-dialog'>arch-fill-in-title</a></li>";
}

function loadArchiveTemplate(){
    return "<div class='year'><p class='meta-year date'><strong>arch-fill-in-ym</strong></p> \
    <ul style='list-style-type:disc'> \
        arch-fill-in-item \
        </ul> \
        </div>";
}

const archiveItemTemplate = loadArchiveItemTemplate();
const archiveTemplate = loadArchiveTemplate();
const typeTemplate = loadTypeTemplate();
const linkTemplate = loadLinkTemplate();
const imageTemplate  = loadImageTemplate();

function getAllArticles(){
	var result = db.exec("SELECT * FROM articles ORDER BY id DESC");

	//only one 'select', so just need to return [0] which is the first 'select' result
	return result[0].values;
	//var res2 = JSON.stringify(res);
	//console.log( "database contains : " + res2 );
}
const fillindatetime = "fill-in-datetime";
const fillinmonthdate = "fill-in-monthdate";
const fillinyear = "fill-in-year";
const fillintitle = "fill-in-title";
const fillindetail = "fill-in-detail";
const fillinid = "fill-in-id";
const fillinarticleid = "fill-in-articleid";
const fillintype = "fill-in-type";
const fillinlink = "fill-in-link";
const fillinextlink = "fill-in-ext-link";
const fillinimage = "fin-img";
const fillinBase64 = "fin-base64";

const archiveFillinYearMonth = "arch-fill-in-ym";
const archiveFillinItem = "arch-fill-in-item";
const archiveFillinTitle ="arch-fill-in-title";

const HOME_PAGE_BASE_ID = 22;
const ARCHIVE_PAGE_BASE_ID = 100;

function buildHomePage()
{
    console.log( "enter buildHomePage");
    var homePageResult = "";
    var articleData = getAllArticles();
    if( Object.keys(articleData).length == 0 ){
        console.log( "failed to load articles.");
        return "";
    }
    console.log( "data size : " + articleData.length);

    const count = articleData.length;
    var idvalue = HOME_PAGE_BASE_ID;
    for( var i = 0; i<count; ++i){

        /*console.log(  i + " : " + articleData[i][0] + " , "
         + articleData[i][1] + " , " + articleData[i][2] + " , "
         + articleData[i][3] + " , " + articleData[i][4] + " , "
         + articleData[i][5] + " , " + articleData[i][6] +  " , "
         + articleData[i][7]);*/

        var dateTime = articleData[i][2] + "-" + articleData[i][3] + "-" + articleData[i][4];
        var oneResult = articleTemplate.replace(fillindatetime, dateTime);

        var types = getTypes( articleData[i][1]);

        var monthdate =  getMonthShortName(articleData[i][3]) + " " + articleData[i][4];
        oneResult = oneResult.replace(fillinmonthdate, monthdate);
        oneResult = oneResult.replace(fillinyear, articleData[i][2]);
        oneResult = oneResult.replace(fillintitle, articleData[i][5]);
        oneResult = oneResult.replace(fillindetail, articleData[i][6]);
        oneResult = oneResult.replace(fillinid, ++idvalue);
        oneResult = oneResult.replace(fillinarticleid, "article" + idvalue);
        oneResult = oneResult.replace(fillintype, types);
        var externalLink = "";
        //console.log( articleData[i][7].length + " : external link :  " + articleData[i][7] );
        if( 0 < articleData[i][7].length){
            externalLink = linkTemplate.replace(fillinextlink, articleData[i][7] );
            //console.log( "externalLink : " + externalLink );
        }
        oneResult = oneResult.replace(fillinlink, externalLink);

        var imagehtml = "";
        if( articleData[i][8] ){
            imagehtml = imageTemplate.replace( fillinBase64, articleData[i][8]);
        }
        oneResult = oneResult.replace(fillinimage, imagehtml);

        homePageResult += oneResult;
    }
    //console.log( "\r\nHome Screen is : " + homePageResult);
    console.log("exit buildHomePage");
    return homePageResult;
}

function loadArticles( type ){
    //var sqlString = "SELECT * FROM articles WHERE category & " + type + " != 0 ORDER BY id DESC ";

    var sqlString = "SELECT * FROM articles WHERE category & " + type + " != 0 AND year = 2016 ORDER BY month  DESC";
    //SELECT * FROM articles WHERE year = 2016 GROUP BY month ORDER BY month ASC

    console.log("sql string: "+ sqlString);
    var result = db.exec(sqlString);

    return result[0].values;
}

function build(type){
    console.log( "enter type " + type );

    var articleData = loadArticles( type );
    var resultPage = "";

    if( Object.keys(articleData).length == 0 ){
        console.log( "failed to load articles.");
        return "";
    }
    console.log( "data size : " + articleData.length);

    const count = articleData.length;
    var currentMonth = 0;

    var oneResult = "";
    var oneItem = "";

    var idvalue = ARCHIVE_PAGE_BASE_ID;
    for( var i = 0; i<count; ++i){

        if( currentMonth != articleData[i][3]){
            oneResult = oneResult.replace(archiveFillinItem, oneItem);
            resultPage += oneResult;
            oneItem = ""; //clear for next group
            currentMonth = articleData[i][3];

            var yearMonth = articleData[i][2] + " " + getMonthShortName(articleData[i][3]);
            oneResult = archiveTemplate.replace(archiveFillinYearMonth, yearMonth);
        }

        oneItem += archiveItemTemplate.replace(archiveFillinTitle, articleData[i][5]);
    }
    oneResult = oneResult.replace(archiveFillinItem, oneItem);
    resultPage += oneResult;

    //console.log( "\r\nHome Screen is : " + homePageResult);
    console.log("exit build page");
    return resultPage;
}

prepareDB();
//buildHomePage();
var result = build(TYPE_IOS);
console.log(result);
/*
var testS = "/libs/jquery/jquery-1.10.2.js";

console.log( testS );

	if(/^\/[0-9a-zA-Z\_-]*.js$/.test(testS.toString())){
		console.log( "match")
	}
	else
	{
		console.log("not match")
	}
*/

