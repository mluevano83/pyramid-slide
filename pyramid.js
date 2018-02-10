var symbol = $('#symbol');
var height = $('#height');

height.addEventListener('oninput')
    heightStr = height.value;
    heightInt = parseInt(heightStr);    
    drawPyramid(heightInt);
}

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
            rowStr += "#";
        }
        rowElem = $("<p>").html(rowStr);
        $("#pyramid").append(rowElem);
    }
}
