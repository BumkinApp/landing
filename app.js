$(function () {
    $("#js-rotating").Morphext({
        animation: "bounceIn",
        separator: ",",
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    test = () => {
        new Noty({
            text: 'Stay Tuned, Bumkin is coming soon',
            animation: {
                open: 'animated bounceInRight', // Animate.css class names
                close: 'animated bounceOutRight' // Animate.css class names
            }
        }).show();
    }
});
