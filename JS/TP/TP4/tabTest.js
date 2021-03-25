function sumTest(){
    console.log(sum([]));
    console.log(sum([42,404,1337]));
}

function longestWordTest(){
    console.log(longestWord(["lot", "of", "words", "of", "different", "sizes"]));
}
function rangeTest(){
    console.log(range(3, 8, 1));
    console.log(range(40,90,20));
}

function nbOccurencesTest(){
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); 
    console.log(nbOccurences(text, "quux")); 
    console.log(nbOccurences(text, "baz")); 
}

function flatten2DTest(){
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]    
}

function cryptCesarMaxTest(){
    console.log( cryptCesarMax("Bonjour à tous",3));    
}

function cesarDecrypteTest(){
    stringCrypte = cryptCesarMax("attaquez ASTERIX ! ",3);
    console.log(stringCrypte);
    console.log( DecryptCesarMax(stringCrypte,-3));    
}
