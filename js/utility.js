/*
 * all the utility analytics go here
 */
 
/*
 * Entry hazards (spikes, et al.), offensive and defensive
 */
 
function analyseHazards() {
    // my hazards
    var hazDiv = $('#hazards');
    hazDiv.empty().append($('<h4>').append("Your hazards"));
    for (var move in ENTRY_HAZARDS) {
        var have = false;
        for (var i = 0; i < NUM_POKEMON; i++) {
            for (var j = 0; j < 4; j++) {
                if (team[i].moves[j] === null) 
                    continue;
                if (team[i].moves[j].name == ENTRY_HAZARDS[move]) {
                    have = true;
                    break;
                }
            }
            if (have == true)
                break;
        }
        hazDiv.append(ENTRY_HAZARDS[move] + (have ? ": Yes" : ": No"));
        hazDiv.append($('<p>'));
    }
    
    
    // dealing with hazards
}