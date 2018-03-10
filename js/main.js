$(function () {
    $("html, body, *").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 50);
        event.preventDefault();
    });
});
