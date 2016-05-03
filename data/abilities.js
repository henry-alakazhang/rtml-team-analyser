/*
 * All type ability info
 * atm we only consider abilities that affect type matchups
 */

abilities = {
    "Adaptability" : {
        description : "Powers up moves of the same type."
    },
    "Aerilate" : {
        description : "Normal-type moves become Flying-type moves."
    },
    "Aftermath" : {
        description : "Damages the foe landing the finishing hit."
    },
    "Air Lock" : {
        description : "Eliminates the effects of weather."
    },
    "Analytic" : {
        description : "Strengthens moves when moving last."
    },
    "Anger Point" : {
        description : "Raises Attack upon taking a critical hit."
    },
    "Anticipation" : {
        description : "Senses the foe’s dangerous moves."
    },
    "Arena Trap" : {
        description : "Prevents the foe from fleeing."
    },
    "Aroma Veil" : {
        description : "Protects allies from attacks that limit their move choices."
    },
    "Aura Break" : {
        description : "The effects of \"Aura\" Abilities are reversed."
    },
    "Bad Dreams" : {
        description : "Reduces a sleeping foe’s HP."
    },
    "Battle Armor" : {
        description : "The Pokémon is protected against critical hits."
    },
    "Big Pecks" : {
        description : "Protects the Pokémon from Defense-lowering attacks."
    },
    "Blaze" : {
        description : "Powers up Fire-type moves in a pinch."
    },
    "Bulletproof" : {
        description : "Protects the Pokémon from some ball and bomb moves."
    },
    "Cacophony" : {
        description : "Avoids sound-based moves."
    },
    "Cheek Pouch" : {
        description : "Restores HP as well when the Pokémon eats a Berry."
    },
    "Chlorophyll" : {
        description : "Boosts the Pokémon's Speed in sunshine."
    },
    "Clear Body" : {
        description : "Prevents the Pokémon's stats from being lowered."
    },
    "Cloud Nine" : {
        description : "Eliminates the effects of weather."
    },
    "Color Change" : {
        description : "Changes the Pokémon's type to the foe’s move."
    },
    "Competitive" : {
        description : "Boosts the Sp.Atk stat when a stat is lowered."
    },
    "Compound Eyes" : {
        description : "The Pokémon's accuracy is boosted."
    },
    "Contrary" : {
        description : "Inverts stat modifiers."
    },
    "Cursed Body" : {
        description : "Has a 30% chance of Disabling any move that hits the Pokémon."
    },
    "Cute Charm" : {
        description : "Contact with the Pokémon may cause infatuation."
    },
    "Damp" : {
        description : "Prevents combatants from self destructing."
    },
    "Dark Aura" : {
        description : "Powers up each Pokémon's Dark-type moves.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Dark')
                return 1.333;
            return 1;
        },
    },
    "Defeatist" : {
        description : "Halves Attack and Special Attack below 50% HP."
    },
    "Defiant" : {
        description : "Raises Attack two stages upon having any stat lowered."
    },
    "Delta Stream" : {
        description : "Eliminates weather effects and eliminates weaknesses of Flying-type Pokémon.",
        modifyEffectiveness : function(type, myTypes) {
            if (getEffectiveness(type, 'flying') > 1)
                return 0.5;
            return 1
        },
    },
    "Desolate Land" : {
        description : "Creates harsh sunlight."
    },
    "Download" : {
        description : "Adjusts power according to the foe’s lowest defensive stat."
    },
    "Drizzle" : {
        description : "The Pokémon makes it rain if it appears in battle."
    },
    "Drought" : {
        description : "The Pokémon makes it sunny if it is in battle."
    },
    "Dry Skin" : {
        description : "Reduces HP if it is hot. Water restores HP.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Fire')
                return 1.333;
            if (type == 'Water')
                return -1;
            return 1;
        },
    },
    "Early Bird" : {
        description : "The Pokémon awakens quickly from sleep."
    },
    "Effect Spore" : {
        description : "Contact may paralyze, poison, or cause sleep."
    },
    "Fairy Aura" : {
        description : "Powers up each Pokémon's Fairy-type moves.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Fairy')
                return 1.333;
            return 1;
        },
    },
    "Filter" : {
        description : "Powers down supereffective moves.",
        modifyEffectiveness : function(type, myTypes) {
            for (var myType in myTypes) {
                if (getEffectiveness(type, myType) > 1) {
                    return 0.75
                }
            }
            return 1;
        }
    },
    "Flame Body" : {
        description : "Contact with the Pokémon may burn the foe."
    },
    "Flare Boost" : {
        description : "Increases Special Attack to 1.5× when burned."
    },
    "Flash Fire" : {
        description : "Powers up Fire-type moves if hit by a fire move.",
        modifyEffectiveness : function(type, myTypes) {
            // grants immunity to fire
            if (type == 'Fire') {
                return 0;}
            return 1;
        },
    },
    "Flower Gift" : {
        description : "Powers up party Pokémon when it is sunny."
    },
    "Flower Veil" : {
        description : "Prevents lowering of ally Grass-type Pokémon's stats."
    },
    "Forecast" : {
        description : "Transforms with the weather."
    },
    "Forewarn" : {
        description : "Determines what moves the foe has."
    },
    "Friend Guard" : {
        description : "Decreases damage inflicted against ally Pokémon."
    },
    "Frisk" : {
        description : "The Pokémon can check the foe’s held item."
    },
    "Fur Coat" : {
        description : "Halves damage from physical moves."
        // TODO: get this working
        // do i need to rework the modifyEffectiveness() against
        // fuuuuuu
    },
    "Gale Wings" : {
        description : "Gives priority to Flying-type moves."
    },
    "Gluttony" : {
        description : "Encourages the early use of a held Berry."
    },
    "Gooey" : {
        description : "Contact with the Pokémon lowers the attacker's Speed stat."
    },
    "Grass Pelt" : {
        description : "Boosts the Defense stat in Grassy Terrain."
    },
    "Guts" : {
        description : "Boosts Attack if there is a status problem."
    },
    "Harvest" : {
        description : "Sometimes restores a consumed Berry."
    },
    "Healer" : {
        description : "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn."
    },
    "Heatproof" : {
        description : "Weakens the power of Fire-type moves.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Fire')
                return 0.5;
            return 1;
        },
    },
    "Heavy Metal" : {
        description : "Doubles the Pokémon's weight."
    },
    "Honey Gather" : {
        description : "The Pokémon may gather Honey from somewhere."
    },
    "Huge Power" : {
        description : "Raises the Pokémon's Attack stat."
    },
    "Hustle" : {
        description : "Boosts the Attack stat, but lowers accuracy."
    },
    "Hydration" : {
        description : "Heals status problems if it is raining."
    },
    "Hyper Cutter" : {
        description : "Prevents the Attack stat from being lowered."
    },
    "Ice Body" : {
        description : "The Pokémon regains HP in a hailstorm."
    },
    "Illuminate" : {
        description : "Raises the likelihood of meeting wild Pokémon."
    },
    "Illusion" : {
        description : "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move."
    },
    "Immunity" : {
        description : "Prevents the Pokémon from getting poisoned."
    },
    "Imposter" : {
        description : "Transforms upon entering battle."
    },
    "Infiltrator" : {
        description : "Ignores Light Screen, Reflect, and Safeguard."
    },
    "Inner Focus" : {
        description : "The Pokémon is protected from flinching."
    },
    "Insomnia" : {
        description : "Prevents the Pokémon from falling asleep."
    },
    "Intimidate" : {
        description : "Lowers the foe’s Attack stat."
    },
    "Iron Barbs" : {
        description : "Damages attacking Pokémon for 1/8 their max HP on contact."
    },
    "Iron Fist" : {
        description : "Boosts the power of punching moves."
    },
    "Justified" : {
        // TODO: tooltip for type matchups
        description : "Raises Attack when hit by Dark-type moves."
    },
    "Keen Eye" : {
        description : "Prevents the Pokémon from losing accuracy."
    },
    "Klutz" : {
        description : "The Pokémon can’t use any held items."
    },
    "Leaf Guard" : {
        description : "Prevents status problems in sunny weather."
    },
    "Levitate" : {
        description : "Gives full immunity to all Ground-type moves.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Ground')
                return 0;
            return 1;
        },
    },
    "Light Metal" : {
        description : "Halves the Pokémon's weight."
    },
    "Lightning Rod" : {
        description : "The Pokémon draws in all Electric-type moves to raise Sp.Atk.",
        modifyEffectiveness : function(type, myTypes) {
            // grants immunity to electric
            // TODO: for gen 4 and lower, it doesn't
            if (type == 'Electric')
                return 0;
            return 1;
        },
    },
    "Limber" : {
        description : "The Pokémon is protected from paralysis."
    },
    "Liquid Ooze" : {
        description : "Inflicts damage on foes using any draining move."
    },
    "Magic Bounce" : {
        description : "Reflects most non-damaging moves back at their user."
    },
    "Magic Guard" : {
        description : "The Pokémon only takes damage from attacks."
    },
    "Magician" : {
        description : "The Pokémon steals the held item of a Pokémon it hits with a move."
    },
    "Magma Armor" : {
        description : "Prevents the Pokémon from becoming frozen."
    },
    "Magnet Pull" : {
        description : "Prevents Steel-type Pokémon from escaping."
    },
    "Marvel Scale" : {
        description : "Boosts Defense if there is a status problem."
    },
    "Mega Launcher" : {
        description : "Powers up aura and pulse moves."
    },
    "Minus" : {
        description : "Boosts Sp. Atk if another Pokémon has Plus."
    },
    "Mold Breaker" : {
        description : "Moves can be used regardless of Abilities."
    },
    "Moody" : {
        description : "Raises a random stat two stages and lowers another one stage after each turn."
    },
    "Motor Drive" : {
        description : "Raises Speed if hit by an Electric-type move.",
        modifyEffectiveness : function(type, myTypes) {
            // grants immunity to electric attacks
            if (type == 'Electric')
                return 0;
            return 1;
        },
    },
    "Moxie" : {
        description : "Raises Attack one stage upon KOing a Pokémon."
    },
    "Multiscale" : {
        description : "Halves damage taken from full HP."
    },
    "Multitype" : {
        description : "Changes type to match the held Plate."
    },
    "Mummy" : {
        description : "Contact with this Pokémon spreads this Ability."
    },
    "Natural Cure" : {
        description : "All status problems are healed upon switching out."
    },
    "No Guard" : {
        description : "Ensures the Pokémon and its foe’s attacks land."
    },
    "Normalize" : {
        description : "All the Pokémon's moves become Normal type."
    },
    "Oblivious" : {
        description : "Prevents the Pokémon from becoming infatuated."
    },
    "Overcoat" : {
        description : "Protects against damage from weather."
    },
    "Overgrow" : {
        description : "Powers up Grass-type moves in a pinch."
    },
    "Own Tempo" : {
        description : "Prevents the Pokémon from becoming confused."
    },
    "Parental Bond" : {
        description : "Parent and child attack together."
    },
    "Pickpocket" : {
        description : "Steals attacking Pokémon's held item on contact."
    },
    "Pickup" : {
        description : "The Pokémon may pick up items."
    },
    "Pixilate" : {
        description : "Normal-type moves become Fairy-type moves."
    },
    "Plus" : {
        description : "Boosts Sp. Atk if another Pokémon has Minus."
    },
    "Poison Heal" : {
        description : "Restores HP if the Pokémon is poisoned."
    },
    "Poison Point" : {
        description : "Contact with the Pokémon may poison the foe."
    },
    "Poison Touch" : {
        description : "Has a 30% chance of poisoning Pokémon upon contact when attacking."
    },
    "Prankster" : {
        description : "Raises non-damaging moves' priority by one stage."
    },
    "Pressure" : {
        description : "The Pokémon raises the foe’s PP usage."
    },
    "Primordial Sea" : {
        description : "Causes heavy rain."
    },
    "Protean" : {
        // TODO: make note of protean for defensive
        description : "Changes the Pokémon's type to the same type of the move it is using."
    },
    "Pure Power" : {
        description : "Boosts the power of physical attacks."
    },
    "Quick Feet" : {
        description : "Boosts Speed if there is a status problem."
    },
    "Rain Dish" : {
        description : "The Pokémon gradually recovers HP in rain."
    },
    "Rattled" : {
        description : "Raises Speed one stage upon being hit by a Dark, Ghost, or Bug move."
    },
    "Reckless" : {
        description : "Powers up moves that have recoil damage."
    },
    "Refrigerate" : {
        description : "Normal-type moves become Ice-type moves."
    },
    "Regenerator" : {
        description : "Heals for 1/3 max HP upon leaving battle."
    },
    "Rivalry" : {
        description : "Raises Attack if the foe is of the same gender."
    },
    "Rock Head" : {
        description : "Protects the Pokémon from recoil damage."
    },
    "Rough Skin" : {
        description : "Inflicts damage to the foe on contact."
    },
    "Run Away" : {
        description : "Enables sure getaway from wild Pokémon."
    },
    "Sand Force" : {
        description : "Strengthens Rock, Ground, and Steel moves to 1.3× their power during a sandstorm."
    },
    "Sand Rush" : {
        description : "Doubles Speed during a sandstorm."
    },
    "Sand Stream" : {
        description : "The Pokémon summons a sandstorm in battle."
    },
    "Sand Veil" : {
        description : "Boosts the Pokémon's evasion in a sandstorm."
    },
    "Sap Sipper" : {
        description : "Absorbs Grass moves, raising Attack one stage.",
        modifyEffectiveness : function(type, myTypes) {
            // grants immunity to grass attacks
            if (type == 'Grass')
                return 0;
            return 1;
        },
    },
    "Scrappy" : {
        description : "Enables moves to hit Ghost-type foes."
    },
    "Serene Grace" : {
        description : "Boosts the likelihood of added effects appearing."
    },
    "Shadow Tag" : {
        description : "Prevents the foe from escaping."
    },
    "Shed Skin" : {
        description : "The Pokémon may heal its own status problems."
    },
    "Sheer Force" : {
        description : "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects."
    },
    "Shell Armor" : {
        description : "The Pokémon is protected against critical hits."
    },
    "Shield Dust" : {
        description : "Blocks the added effects of attacks taken."
    },
    "Simple" : {
        description : "The Pokémon is prone to wild stat changes."
    },
    "Skill Link" : {
        description : "Increases the frequency of multi-strike moves."
    },
    "Slow Start" : {
        description : "Temporarily halves Attack and Speed."
    },
    "Sniper" : {
        description : "Powers up moves if they become critical hits."
    },
    "Snow Cloak" : {
        description : "Raises evasion in a hailstorm."
    },
    "Snow Warning" : {
        description : "The Pokémon summons a hailstorm in battle."
    },
    "Solar Power" : {
        description : "Boosts Sp. Atk, but lowers HP in sunshine."
    },
    "Solid Rock" : {
        description : "Powers down supereffective moves.",
        modifyEffectiveness : function(type, myTypes) {
            return abilities["Filter"].modifyEffectiveness(type, myTypes);
        },
    },
    "Soundproof" : {
        description : "Gives full immunity to all sound-based moves."
    },
    "Speed Boost" : {
        description : "The Pokémon's Speed stat is gradually boosted."
    },
    "Stall" : {
        description : "The Pokémon moves after even slower foes."
    },
    "Stance Change" : {
        description : "The Pokémon changes form depending on how it battles."
    },
    "Static" : {
        description : "Contact with the Pokémon may cause paralysis."
    },
    "Steadfast" : {
        description : "Raises Speed each time the Pokémon flinches."
    },
    "Stench" : {
        description : "The stench may cause the target to flinch."
    },
    "Sticky Hold" : {
        description : "Protects the Pokémon from item theft."
    },
    "Storm Drain" : {
        description : "The Pokémon draws in all Water-type moves.",
        modifyEffectiveness : function(type, myTypes) {
            // grants immunity to water attacks
            if (type == 'Water')
                return 0;
            return 1;
        },
    },
    "Strong Jaw" : {
        description : "The Pokémon's strong jaw gives it tremendous biting power."
    },
    "Sturdy" : {
        description : "The Pokémon is protected against 1-hit KO attacks."
    },
    "Suction Cups" : {
        description : "Negates moves that force switching out."
    },
    "Super Luck" : {
        description : "Heightens the critical-hit ratios of moves."
    },
    "Swarm" : {
        description : "Powers up Bug-type moves in a pinch."
    },
    "Sweet Veil" : {
        description : "Prevents itself and its allies from falling asleep."
    },
    "Swift Swim" : {
        description : "Boosts the Pokémon's Speed in rain."
    },
    "Symbiosis" : {
        description : "The Pokémon can pass an item to an ally."
    },
    "Synchronize" : {
        description : "Passes on a burn, poison, or paralysis to the foe."
    },
    "Tangled Feet" : {
        description : "Raises evasion if the Pokémon is confused."
    },
    "Technician" : {
        description : "Powers up the Pokémon's weaker moves."
    },
    "Telepathy" : {
        description : "Protects against damaging moves from friendly Pokémon."
    },
    "Teravolt" : {
        description : "Moves can be used regardless of Abilities."
    },
    "Thick Fat" : {
        description : "Raises resistance to Fire- and Ice-type moves.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Fire' || type == 'Ice')
                return 0;
            return 1;
        },
    },
    "Tinted Lens" : {
        description : "Powers up “not very effective” moves."
    },
    "Torrent" : {
        description : "Powers up Water-type moves in a pinch."
    },
    "Tough Claws" : {
        description : "Powers up moves that make direct contact."
    },
    "Toxic Boost" : {
        description : "Increases Attack to 1.5× when poisoned."
    },
    "Trace" : {
        description : "The Pokémon copies a foe's Ability."
    },
    "Truant" : {
        description : "The Pokémon can't attack on consecutive turns."
    },
    "Turboblaze" : {
        description : "Moves can be used regardless of Abilities."
    },
    "Unaware" : {
        description : "Ignores any change in stats by the foe."
    },
    "Unburden" : {
        description : "Raises Speed if a held item is used."
    },
    "Unnerve" : {
        description : "Prevents opposing Pokémon from eating held Berries."
    },
    "Victory Star" : {
        description : "Raises moves' accuracy to 1.1× for friendly Pokémon."
    },
    "Vital Spirit" : {
        description : "Prevents the Pokémon from falling asleep."
    },
    "Volt Absorb" : {
        description : "Restores HP if hit by an Electric-type move.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Electric')
                return -1;
            return 1;
        },
    },
    "Water Absorb" : {
        description : "Restores HP if hit by a Water-type move.",
        modifyEffectiveness : function(type, myTypes) {
            if (type == 'Water')
                return -1;
            return 1;
        },
    },
    "Water Veil" : {
        description : "Prevents the Pokémon from getting a burn."
    },
    "Weak Armor" : {
        description : "Raises Speed and lowers Defense by one stage each upon being hit by any move."
    },
    "White Smoke" : {
        description : "Prevents the Pokémon's stats from being lowered."
    },
    "Wonder Guard" : {
        description : "Only supereffective moves will hit.",
        modifyEffectiveness : function(type, myTypes) {
            for (var myType in myTypes) {
                if (getEffectiveness(type, myType) <= 1)
                    return 0;
            }
            return 1;
        }
    },
    "Wonder Skin" : {
        description : "Has a 50% chance of protecting against non-damaging moves that inflict major status ailments."
    },
    "Zen Mode" : {
        description : "Changes the Pokémon's shape when HP is halved."
    }
};