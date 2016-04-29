typeMatrix = {};
for (var type in types) {
    typeMatrix[type] = [];
    for (var i = 0; i < NUM_POKEMON; i++) {
        typeMatrix[type][i] = 0;
    }
}

// generate the pokemon input forms
for (var i = 0; i < NUM_POKEMON; i ++) {
    var mon = $('<div>' ,{
        'class' : "col-md-2 pokemon",
        'id' : "pokemon" + i
    })
    mon.append($('<input>', {
        'class' : "form-control pokemon-collapser",
        'id' : "pokemon-selector-" + i,
        'poke-num' : i,
        'placeholder' : "Pokemon #" + i
    }));
    var monInfo = $('<div>', {
        'id' : "pokemon" + i + "collapse"
    });
    monInfo.append($('<select>', {
        'class' : "form-control",
        'id' : "ability-selector-" + i,
        'disabled' : true
    }));
    monInfo.append($('<br>'));
    moves = $('<div>', {
        'class' : "move-container"
    });
    for (var j = 1; j <=4; j ++) {
        moves.append($('<input>', {
            'class' : "move form-control",
            'type'  : "text",
            'placeholder' : "Move #1",
            'id'    : i + "move" + j
        }));
    }
    monInfo.append(moves);
    mon.append(monInfo);
    $('#team').append(mon);
}

// add some fancy things
$(".move" ).autocomplete({
    source: moves_autocomplete,
});

$(".pokemon-collapser").autocomplete({
    source : pokemon_autocomplete,
    select : function (a, b) {
        $(this).val(b.item.value);
        updateAbilityPicker($(this).attr("poke-num"));
        updateTypeMatrix();
        drawTypeTable();
    }
});

$(".move").on('change', function(e) {
    console.log(e);
});

$('#offense a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#defense a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
$('#utility a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

// generate a type table
drawTypeTable();

function updateAbilityPicker(n) {
    var mon = getPokeFromName($("#pokemon-selector-" + n).val());
    for (var ability in pokedex[mon]["abilities"]) {
        $("#ability-selector-"+n)
            .append($('<option>')
            .append(pokedex[mon]["abilities"][ability]));
    }
    $("#ability-selector-"+n).prop('disabled', false);
    
}

function drawTypeTable() {
    var firstRow = $('<tr>').append($('<th>'));
    for (var i = 0; i < NUM_POKEMON; i++) {
        firstRow.append($('<th>').append($("#pokemon-selector-" + i).val()));
    }
    $("#typetable-head").empty().append(firstRow);
    $("#typetable-body").empty();
    for (type in typeMatrix) {
        var row = $('<tr>');
        var typeHeader = $('<td>').append(type);
        row.append(typeHeader);
        // [weak,neutral,strong];
        var total = [0,0,0];
        for (mon in typeMatrix[type]) {
            var col = $('<td>').append(typeMatrix[type][mon]);
            if ($("#pokemon-selector-" + mon).val()) { // only colour if pokemon team exists
                switch (typeMatrix[type][mon]) {
                case 0.25:
                case 0.5:
                case 0:
                    col.addClass('success'); break;
                case 2:
                case 4:
                    col.addClass('danger'); break;
                default:
                    col.addClass('warning');
                }
                total += typeMatrix[type][mon];
                if (typeMatrix[type][mon] == 0) total += 5;
            }
            row.append(col);
        }
        if (total < 6) {
            typeHeader.addClass('success');
        } else if (total > 7) {
            typeHeader.addClass('danger');
        } else {
            typeHeader.addClass('warning');
        }
        $("#typetable-body").append(row);
    }
}