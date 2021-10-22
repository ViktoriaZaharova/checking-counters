$('[name="phone"]').mask('+7 (999) - 999 - 99 - 99');

$(".services-list__links").hover(function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tab'),
        content = $('.services-map-hover[data-tab="'+ id +'"]');

    $('.services-list__links.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.services-map-hover.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// модальные окна
$(function () {
    let overlay = $('.overlay'),
        open_modal = $('.open_modal'),
        close = $('.modal__close, .overlay, .btn-close-modal'),
        modal = $('.modal__div');

    open_modal.on('click',function (event) {
        event.preventDefault();

        modal.css('display', 'none').animate({
            opacity: 0,
            top: '45%'
        }, 200);

        let div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.on('click', function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end