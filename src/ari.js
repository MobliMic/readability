(()=>{
    var CHARACTER_WEIGHT = 4.71;
    var SENTENCE_WEIGHT = 0.5;
    var BASE = 21.43;

    function automatedReadability(counts) {
        if (!counts || !counts.sentence || !counts.word || !counts.character) {
            return NaN;
        }

        return (CHARACTER_WEIGHT * (counts.character / counts.word)) + (SENTENCE_WEIGHT * (counts.word / counts.sentence)) - BASE;
    }

//     const ari = Math.round(automatedReadability({
//         sentence: 3,
//         word: 69,
//         character: 683
//     }));
    
    const ari = Math.round(automatedReadability({
        sentence: 11,
        word: 275,
        character: 1348
    }));

    const vals = {
        90: 'Very Easy',
        80: 'Easy',
        70: 'Fairly Easy',
        60: 'Standard',
        50: 'Fairly Difficult',
        30: 'Difficult',
        0: 'Very Confusing',
    };

    const valKeys = Object.keys(vals);
    let currentDiff, smallestDiff = Math.abs(ari - valKeys[0]), closest = 0;

    for (let i = 0; i < valKeys.length; i++) {
        currentDiff = Math.abs(ari - valKeys[i]);
        if (currentDiff < smallestDiff) {
            smallestDiff = currentDiff;
            closest = i;
        }
    }

    return vals[valKeys[closest]];
}
)();
