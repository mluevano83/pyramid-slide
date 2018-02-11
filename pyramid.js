
var height = document.getElementById("height");
var heightDisplay = $('#height-display');
heightDisplay.append(height.value);
getHeightAndDrawPyramid(height.value);

height.oninput = function () {
    console.log(height.value);
    heightDisplay.empty();
    $("#height-display").append(height.value);
    getHeightAndDrawPyramid(height.value)
}

var symbol = $('#symbol');
symbol.on('change', function() {
    getHeightAndDrawPyramid(height.value)
});

function getHeightAndDrawPyramid(height) {
    heightInt = parseInt(height);    
    drawPyramid(heightInt);
}
$("#height-display").append(height.value);

function drawPyramid(height) {
    $("#pyramid").empty();

    for (var row = 0; row < height; row++) {
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += $('#symbol option:selected').text();
        }
        rowElem = $("<p>").html(rowStr);
        $("#pyramid").append(rowElem);
    }
}