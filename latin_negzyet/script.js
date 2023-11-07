document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var table = Array.from(document.querySelectorAll('tr')).map(function(row) {
        return Array.from(row.querySelectorAll('input')).map(function(input) {
            return parseInt(input.value, 10);
        });
    });

    var isValid = checkLatinSquare(table);

    if (isValid) {
        alert('A beírt számok latin négyzetet alkotnak.');
    } else {
        alert('A beírt számok nem alkotnak latin négyzetet.');
    }
});

function checkLatinSquare(table) {
    var size = table.length;

    for (var i = 0; i < size; i++) {
        var row = table[i];
        var column = table.map(function(row) { return row[i]; });

        if (!checkUnique(row) || !checkUnique(column)) {
            return false;
        }
    }

    return true;
}

function checkUnique(array) {
    var values = {};

    for (var i = 0; i < array.length; i++) {
        if (values[array[i]]) {
            return false;
        }

        values[array[i]] = true;
    }

    return true;
}