/*
 * All the type analytics go here
 */

function updateTypeMatrix() {
    for (var type in types) {
        for (var i = 0; i < NUM_POKEMON; i ++) {
            var poke = getPokeFromName($("#pokemon-selector-" + i).val());
            if (poke != -1) {
                typeMatrix[type][i] = getEffectiveness(type, pokedex[poke].types);
            } else {
                typeMatrix[type][i] = 0;
            }
        }
    }
}

function updateTypeMatrixAdv() {
    
}