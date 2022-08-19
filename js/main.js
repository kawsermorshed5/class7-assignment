$(document).ready(function () {
    $('.hotel-item').show();
    $('.ticket-item').hide();
    $('.place-item').hide();

    // $('#hotel span').addclass('line');



    // for hotel
    $('#hotel').click(function () {
        $('.hotel-item').show();
        $('.ticket-item').hide();
        $('.place-item').hide();
    });
    // for ticket
    $('#ticket').click(function () {
        $('.hotel-item').hide();
        $('.ticket-item').show();
        $('.place-item').hide();
    });
    $('#place').click(function () {
        $('.hotel-item').hide();
        $('.ticket-item').hide();
        $('.place-item').show();
    });
})