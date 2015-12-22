window.$ = window.jQuery = require('jquery');

$(document).ready(function(){
    var url = null;

    $("#submit").on('click', function(){
        url = $('#url-input').val()
        $('body').append('<webview src="https://'+ url +'.protonet.info" autosize="on" minwidth="576" minheight="432"></webview>');
        $('#domain-entry').remove();

        return false;
    });
});