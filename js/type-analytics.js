/*
 * All the type analytics go here
 */

function updateTypeMatrix() {
    console.log(typeMatrix);
    for (var type in types) {
        for (var i = 0; i < NUM_POKEMON; i ++) {
            poke = getPokeFromName($("#pokemon-selector-" + i).val());
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