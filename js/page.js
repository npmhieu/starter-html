var basicJS = {
    initComponents: function () {
        // Example
        // $('.summernote').summernote();
      console.log('Init is called');
    },
    handleSomeBehaviors: function () {
        var startButton = jQuery('#start-button');

        startButton.click(function (e) {
            e.preventDefault();
            // Do something
        });
    },
    init: function () {
        this.initComponents();
        this.handleSomeBehaviors();
    }
};

$(function () {
    basicJS.init();
});