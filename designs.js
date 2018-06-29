var color, width, height;

// When size is submitted by the user, call makeGrid()
$(function() {
    $('.btn').click(function(event) {
        debugger
        event.preventDefault();
        width = $('#inputWidth').val();
        height = $('#inputHeight').val();

        makeGrid(height, width);
        // alert("string");

    });
    $('#pixelCanvas').click(function addColor() {
        color = $('#colorPicker').val();
        cell = $(event.target).attr('id');
        $('#' + cell).css('background-color', color);
        // if ($(this).attr('style')) {
        //     $(this).removeAttr('style');
        // } else {
        //     $(this).css('background-color:' + color);
        // }
    });

});



function makeGrid(height, width) {
    // Your code goes here!
    var tableData = 0;
    $('tr').remove();
    for (n = 1; n <= height; n++) {
        $('#pixelCanvas').append('<tr id="row' + n + '"></tr>');
        for (m = 1; m <= width; m++) {
            $('#row' + n).append('<td id="' + tableData++ + '" ></td>');
            //$('tr:last-child').append('<td id="tableCels"></td>')
        }
    }

}