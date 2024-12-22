var arlo_tm_animate_text = function() {
    var animateSpan = jQuery(".arlo_tm_animation_text_word");
    animateSpan.typed({ strings: ["Web Devloper", "Final Year Student", "Designer"], loop: true, startDelay: 1e3, backDelay: 2e3 });
}

var arlo_tm_about_animation = function() {
    if ($(".parallax").length > 0) {
        var scene = $(".parallax").get(0);
        var parallax = new Parallax(scene, {
            relativeInput: true,
            onReady: function () {
                console.log("ready!");
            },
        });
    }
}