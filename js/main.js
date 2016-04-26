
// count pokemon 1 to 6
for (var i = 1; i <= 6; i ++) {
    var mon = $('<div>' ,{
        'class' : "col-md-2 pokemon",
        'id' : "pokemon" + i
    })
    mon.append($('<input>', {
        'class' : "form-control pokemon-collapser",
        'poke-num' : i,
        'placeholder' : "Pokemon #" + i
    }));
    var monInfo = $('<div>', {
//        'class' : "collapse",
        'id' : "pokemon" + i + "collapse"
    });
    monInfo.append($('<input>', {
        'class' : "form-control",
        'type' : "text",
        'placeholder' : "Ability"
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

$(".move" ).autocomplete({
    source: moves_autocomplete,
});

$(".pokemon-collapser").autocomplete({
    source : pokemon_autocomplete
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