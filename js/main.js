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
//    monInfo.append($('<br>'));
    moves = $('<div>', {
        'class' : "move-container",
        'hidden' : "hidden"
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
        recalculateTables();
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
$('#advdef-checkbox').click(function() {
    $('#adv-options').collapse('toggle');
    recalculateTables();
});
$('#adv-options input').click(recalculateTables);
$('#adv-options label').tooltip();

$('#utility a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

// generate a type table
recalculateTables();

function recalculateTables() {
    updateTypeMatrix();
    drawTypeTable();
}

function updateAbilityPicker(n) {
    var mon = getPokeFromName($("#pokemon-selector-" + n).val());
    $("#ability-selector-"+n).empty();
    for (var ability in pokedex[mon]["abilities"]) {
        $("#ability-selector-"+n)
            .append($('<option>')
            .append(pokedex[mon]["abilities"][ability]));
    }
    $("#ability-selector-"+n).prop('disabled', false);
    $("#ability-selector-"+n).change(recalculateTables);
}