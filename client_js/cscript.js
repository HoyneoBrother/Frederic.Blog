$('.flickr_badge_image a img')
.removeAttr("width").removeAttr("height")
.css({ width: "", height: "" });

var rootPath = "/testWS.simple";

$(document).ready(function() 
{

$('.flickr_badge_image a img')
.removeAttr("width").removeAttr("height")
.css({ width: "", height: "" });

    var options =
    {

        slideUpSpeed : 200,
   
    }
    
    var methods = 
    {

        overlayHover : function(e)
        {
            var overlay;
            var slideFrom = e.data.slideFrom;
            var content;
            
            if (typeof e.data.target == 'string')
            {   
                overlay = $(this).parents(e.data.target).find('.overlay-wrap');
                content = $(this).parents(e.data.target).find('.content-wrap');
            }
            else
            {
                overlay = $(this).find('.overlay-wrap');
                content = $(this).find('.content-wrap');
            }
            
            if ( (e.type == 'mouseover' && !overlay.hasClass('animating')) ||
                 (e.type == 'click' && !overlay.hasClass('animating') && !overlay.hasClass('active')) )
            {
                var animation = {};
                animation[slideFrom] = '0%';
                overlay.addClass('animating').addClass('active');
                overlay.stop().animate(animation, options.slideUpSpeed, function(){
                    overlay.removeClass('animating').addClass('active');
                });
                
                animation[slideFrom] = '100%';
                content.parent().css('height', content.parent().height());
                content.stop(true,true).animate(animation, options.slideUpSpeed);
            }
            else if (e.type == 'mouseleave' || (e.type == 'click' && !overlay.hasClass('animating')))
            {
                var animation = {};
                var animationContent = {};
                
                animationContent[slideFrom] = '0%';
                content.parent().css('height', content.parent().height());
                content.stop(true,true).animate(animationContent, options.slideUpSpeed, function()
                {
                    content.parent().css('height', '');
                });
                animation[slideFrom] = '-100%';
                overlay.removeClass('active');
                overlay.stop(true,true).animate(animation, options.slideUpSpeed);
            }
        }
    }


    $('.hover-down').on('mouseover', {slideFrom : 'top'}, methods.overlayHover).on('mouseleave', {slideFrom : 'top'}, methods.overlayHover);

});



