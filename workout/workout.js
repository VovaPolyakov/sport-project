$(document).ready(function(){
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).text("Pause");    
        } else {
            video.pause();
            $(this).text("Play");
        }
                
        $(this).toggleClass("paused"); 
    });
}); 
video.addEventListener("ended", function() {
    video.pause();
    controls.playpause.text("Play");
    controls.playpause.toggleClass("paused");
});
var controls = {
    togglePlayback: function() {
        (video.paused) ? video.play() : video.pause();
    }
};
                
controls.playpause.click(function(){
    controls.togglePlayback();
});
controls.video.click(function() {
    controls.togglePlayback();
});
video.addEventListener("canplay", function() {
    controls.hasHours = (video.duration / 3600) >= 1.0;                    
    controls.duration.text(formatTime(video.duration, controls.hasHours));
    controls.currentTime.text(formatTime(0),controls.hasHours);
}, false);
;
video.addEventListener("timeupdate", function() {
    controls.currentTime.text(formatTime(video.currentTime, controls.hasHours));
                    
    var progress = Math.floor(video.currentTime) / Math.floor(video.duration);
    controls.progress[0].style.width = Math.floor(progress * controls.total.width()) + "px";
}, false);
controls.total.click(function(e) {
    var x = (e.pageX - this.offsetLeft)/$(this).width();
    video.currentTime = x * video.duration;
});
