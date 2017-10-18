(function (jQuery) {
    const yellow = "#ff2";
    jQuery.fn.yellow = function() {
        this.css( "color", yellow );
        return this;
    };
}(jQuery));
