// Для старых браузеров подключаем jquery.placeholder
if (!Modernizr.input.placeholder){
  $('input, textarea').placeholder();
} 

//Блок ПОДЕЛИТЬСЯ
var likeBtn = $('.blk-share'),
	socialslinks = $(".blk-share-soc-link");

var showShare = function(blk, margin){
    if (blk.hasClass('active')) {
        blk.animate({
            'right': margin},
            250, function() {
            blk.removeClass('active');
        });
   }else{
        blk.animate({
            'right': '0px'},
            250, function() {
            blk.addClass('active');
        });
   };
}
//Блок ПОДЕЛИТЬСЯ/

var wow = new WOW({mobile: false});


$(document).ready(function(){
    $('.bxslider').bxSlider({auto: true});
    $('.scroll-pane').jScrollPane();
    readMore.init('.blk-read-more');
    wow.init();

    likeBtn.on('click', function(event) {
        event.preventDefault();
        showShare(likeBtn, '-350px');
    });

	socialslinks.on('click', function(event) {
		event.stopPropagation();
	});
   
});//ready

