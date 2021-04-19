$(document).ready(function () {
    $('img').click(function () {
        var current = $(this).attr("src");
        var replacement = $(this).attr("data-alt-src");
        $(this).attr('data-alt-src', current);
        $(this).attr('src', replacement);
    })
})