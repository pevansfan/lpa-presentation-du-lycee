document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('#background-video');
    video.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
});
