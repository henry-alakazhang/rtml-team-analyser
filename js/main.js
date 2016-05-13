team = [];
defenseMatrix = {};
for (var type in types) {
    defenseMatrix[type] = [];
    for (var i = 0; i < NUM_POKEMON; i++) {
        defenseMatrix[type][i] = 0;
    }
}
offenseMatrix = [];
for (var i = 0; i < NUM_POKEMON; i++) {
    offenseMatrix[i] = []; // nothing here yet
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
        'placeholder' : "Pokemon #" + (i + 1),
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
    var movePickers = $('<div>', {
        'class' : "move-container",
    });
    for (var j = 0; j < 4; j ++) {
        movePickers.append($('<input>', {
            'class' : "move form-control",
            'type'  : "text",
            'placeholder' : "Move #" + (j+1),
            'id'    : i + "move" + j
        }));
    }
    monInfo.append(movePickers);
    mon.append(monInfo);
    $('#teamBuilder').append(mon);
}

$(".move" ).autocomplete({
    source : moves_autocomplete,
    select : function () {
        loadPokemon();
    }
});

$(".pokemon-collapser").autocomplete({
    source : pokemon_autocomplete,
    select : function (a, b) {
        $(this).val(b.item.value);
        loadPokemon();
        updateAbilityPicker($(this).attr("poke-num"));
        analyse();
    }
});

$("input, select").on('change', function(e) {
    loadPokemon();
});

$('#offense a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(this).addClass("active");
    analyse();
});
$('#defense a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(this).addClass("active");
    analyse();
});
$('#advdef-checkbox').click(function() {
    $('#adv-options').collapse('toggle');
    analyse();
});
$('#adv-options input').click(analyse);
$('#adv-options label').tooltip();

$('#utility a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $(this).addClass("active");
    analyse();
});

// load empty team
loadPokemon();

// generate analysis
analyse();

function analyse() {
    loadPokemon();
    // only run the analysis we need to show
    if ($("#defense").hasClass("active")) {
        updateDefenseMatrix();
        drawDefenseTable();
    } else if ($("#offense").hasClass("active")) {
        updateOffenseMatrix();
        drawOffenseTable();
    } else if ($("#utility").hasClass("active")) {
        analyseHazards();
    }
}

function loadPokemon() {
    for (var i = 0; i < NUM_POKEMON; i++) {
        team[i] = {
            'dex'     : getPokeFromName($("#pokemon-selector-"+i).val()),
            'ability' : $("#ability-selector-"+i).val(),
            'moves'   : [ // yeah yeah it's hardcoded
                getMoveByName($("#" + i + "move" + 0).val()),
                getMoveByName($("#" + i + "move" + 1).val()),
                getMoveByName($("#" + i + "move" + 2).val()),
                getMoveByName($("#" + i + "move" + 3).val()),
            ]
        }
    }
}

function updateAbilityPicker(n) {
    var mon = team[n].dex;
    $("#ability-selector-"+n).empty();
    for (var ability in pokedex[mon].abilities) {
        $("#ability-selector-"+n)
            .append($('<option>')
            .append(pokedex[mon]["abilities"][ability]));
    }
    $("#ability-selector-"+n).prop('disabled', false);
    $("#ability-selector-"+n).change(analyse);
}