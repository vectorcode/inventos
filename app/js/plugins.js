// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//Модуль - читать дальше
var readMore = (function($) {
    'use strict';
    
    var init = function(cls){//публичный метод
        var blkShowMore = $(cls),
            textClass = blkShowMore.data('textclass'),
            blkText = $('.'+textClass);
            
        if(blkText.length === 0){
            console.warn("Нет блоков с классом "+textClass);
            return false;     
        }

        blkText.hide();
        _bind(blkShowMore, blkText);


        _c("Инициализировали модуль readMore");
    },
    _c = function(text){
        var flag = false;
        if(flag){console.log(text);}
    },
    _bind = function(blk, bText){
        blk.on('click', function(event) {
            event.preventDefault();
            _c('Клик readMore');

            if (!$(this).hasClass('active')) {
                _c('Показываем текст');
                bText.animate({height: 'show'}, 500);
                $(this).addClass('active').find('.blk-read-more-text').text('Скрыть текст');
           }else{
                _c('Прячем текст');
                bText.animate({height: 'hide'}, 500);
                $(this).removeClass('active').find('.blk-read-more-text').text('Читать далее');
           };
                    
        });
    };
 
    return {init : init};
}(jQuery));
// читать дальше /
