/*
 * offensive type analytics go here
 */

function updateOffenseMatrix() {
    offenseMatrix = [];
    for (var i = 0; i < NUM_POKEMON; i++) {
        offenseMatrix[i] = [];

        // check if this mon has moves
        var nulls = 4;
        for (var m in team[i].moves) {
            if (team[i].moves[m] === null) {
                nulls--;
            } else {
                break;
            }
        }
        if (!nulls) continue;

        // calculate offensive capabilities
        // converts types into array to skip over duplicate combos
        var typeArray = [];
        for (var t in types) {
            typeArray[types[t]] = t;
        }
        for (var t1 = 0; t1 < typeArray.length; t1++) {
            if (getPokeVsType(i, [typeArray[t1]]) == -1) {
                offenseMatrix[i][offenseMatrix[i].length] = typeArray[t1];
            }
            for (var t2 = (t1+1); t2 < typeArray.length; t2++)  {
                if (getPokeVsType(i,[typeArray[t1],typeArray[t2]]) == -1) {
                    offenseMatrix[i][offenseMatrix[i].length] = typeArray[t1] + "/" + typeArray[t2];
                }
            }
        }
    }
}

/*
 * returns how effectively a Pokemon can hit a type combo
 * returns:
 *   1 if the pokemon can hit super effectively
 *   0 if the pokemon can only hit neutrally
 *   -1 if the pokemon gets walled
 */
function getPokeVsType(num, def) {
    var walled = true;
    for (var m in team[num].moves) {
        var move = team[num].moves[m];
        if (move == null) 
            continue;
        if (move.category == "other")
            continue;
        if (getEffectiveness(move.type, def) > 1) {
            return 1;
        } else if (getEffectiveness(move.type, def) == 1) {
            walled = false;
        }
    }
    return (walled) ? -1 : 0;
}

function drawOffenseTable() {
    var firstRow = $('<tr>').append($('<th>'));
    $("#typetable-off-body").empty().append($('<td>').append("Walled by:"));
    for (var i = 0; i < NUM_POKEMON; i++) {
        firstRow.append($('<th>').append($("#pokemon-selector-" + i).val()));
        var monCollapse = $('<div>', {
            'class' : "collapse",
            'id' : "collapse" + i
        });
        for (var combo in offenseMatrix[i]) {
            monCollapse.append(offenseMatrix[i][combo]).append('<p>');
        }
        var button = $('<button>', {
            'class': "btn btn-primary",
            'type': "button",
            'data-toggle': "collapse",
            'data-target': "#collapse" + i,
            'aria-expanded': "false",
        }).append(offenseMatrix[i].length + " type combinations");
        $("#typetable-off-body").append($('<td>').append(button).append(monCollapse));
    }
    $("#typetable-off-head").empty().append(firstRow);
}