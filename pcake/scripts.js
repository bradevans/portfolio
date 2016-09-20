var word1 = document.getElementById('word1'),
    word2 = document.getElementById('word2');

var getEditDistance = function(word1val, word2val){
    var matrix = [];

    // if there's no value in wordN, return opposite word value
    if (word1val.length === 0) return word2val.length;
    if (word2val.length === 0) return word1val.length;

    // initialize matrix rows
    for (var i = 0; i <= word2val.length; i++) {
        matrix[i] = [i];
    }

    // initialize matrix columns
    for (var j = 0; j <= word1val.length; j++) {
        matrix[0][j] = j;
    }

    // examine rows/columns
    for (i = 1; i <= word2val.length; i++) {
        for (j = 1; j <= word1val.length; j++) {

            // if char[i] are equal, add to matrix
            if (word2val.charAt(i - 1) === word1val.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];

                console.log(matrix);

            // else,
            } else {
                matrix[i][j] =
                    Math.min(matrix[i - 1][j - 1] + 1,
                        Math.min(matrix[i][j - 1] + 1,
                            matrix[i - 1][j] + 1));
            }
        }
    }

    document.getElementById('distance').innerHTML = matrix[word2val.length][word1val.length];

    return matrix[word2val.length][word1val.length];
};

word1.addEventListener('keyup', function(){
    getEditDistance(word1.value, word2.value);
});
word2.addEventListener('keyup', function(){
    getEditDistance(word1.value, word2.value);
});