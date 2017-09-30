$(function() {

    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/busido.karate@gmail.com",
            method: "POST",
            data: { 
                clientName: $('#client-name').val(),
                clientTel: $('#client-tel').val(),
                clientEmail: $('#client-email').val(),
                clientQuestion: $('#client-question').val()},
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('Дякую, Ваш запит відправлено.');
        }).fail(function() {
            $('#message-box').html('Вибачте, сталася помилка!');
        });
    });

});