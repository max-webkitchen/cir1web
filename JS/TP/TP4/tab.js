function sum(numbers){
    s = 0
    for (let i=0; i<numbers.length; i++){
        s += numbers[i];
    }
    // for (let i of numbers){
    //     s+=i;
    // }
    return s;
}








function longestWord(words){
    let l = 0;
    let ww = null;
    for (let w of words){
        if(w.length>l){
            l = w.length;
            ww = w;
        }
    }
    return ww;
}






function range(min, max, step){
    let l = []
    for(let i=min; i<max+1; i=i+step){
        l.push(i);
    }
    return l;
}






function nbOccurences(worldList, word){
    let words = worldList.split(" ");
    let c = 0;
    for (let w of words){
        if (w==word){
            c++;
        }
    }
    return c;
}




function flatten2D(array){
    let l = [];
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array[i].length; j++){
            l.push(array[i][j])
        }
    }
    return l;
}


function multiplicationTable(){
  let r = [];
  for(i=1;i<=9;i++){
    //r[i]=i;
    
    let res = []
    for(j=1;j<=9;j++){
      res.push(i*j)
    }
    r.push(res)
  }
  console.log(r)
}




function cryptCesarMax(chaine, decalage){

  let cryptChaine = ""
    for (let i = 0; i < chaine.length; i++){
      c = chaine[i];
      if(c.match(/[a-z]/i)){
        lettreCode = c.charCodeAt(0)
        if(lettreCode >= 65 && lettreCode <=90) { // lettre Maj
          code = ((lettreCode - 65 + decalage) % 26) + 65
        }
        else if ((lettreCode >= 97) && (lettreCode <= 122)) {
          code = ((lettreCode - 97 + decalage) % 26) + 97
        }
        c = String.fromCharCode(code)
      }
      cryptChaine += c
    }
    return cryptChaine;

}

function DecryptCesarMax(chaine, decalage){

  let cryptChaine = ""
    for (let i = 0; i < chaine.length; i++){
      c = chaine[i];
      if(c.match(/[a-z]/i)){
        lettreCode = c.charCodeAt(0)
        if(lettreCode >= 65 && lettreCode <=90) { // lettre Maj
          code = ((lettreCode - 65 + 26 + decalage) % 26) + 65
        }
        else if ((lettreCode >= 97) && (lettreCode <= 122)) {
          code = ((lettreCode - 97 + 26 + decalage) % 26) + 97
        }
        c = String.fromCharCode(code)
      }
      cryptChaine += c
    }
    return cryptChaine;

}



function cesarCrypte(str, amount) {
  
    // variable pour stocker le résultat
    var res = '';
    // Parcourir chaque caractére
    for (var i = 0; i < str.length; i++) {
      // Récupérer le caractére que nous allons ajouter
      var c = str[i];
      // Vérifier si c'est une lettre
      if (c.match(/[a-z]/i)) {
        // Récupérer son code
        var code = str.charCodeAt(i);
        // Lettres majuscules
        if ((code >= 65) && (code <= 90))
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        // Lettres minuscules
        else if ((code >= 97) && (code <= 122))
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
      // Ajouter le caractére
      res += c;
    }
    // Résultat
    return res;
  };
 
  
function cesarDecrypte(str, amount) {
  
    if (amount < 0)
      return cesarCrypte(str, amount + 26);
    
    // variable pour stocker le résultat
    var res = '';
    // Parcourir chaque caractére
    for (var i = 0; i < str.length; i++) {
      // Récupérer le caractére que nous allons ajouter
      var c = str[i];
      // Vérifier si c'est une lettre
      if (c.match(/[a-z]/i)) {
        // Récupérer son code
        var code = str.charCodeAt(i);
        // Lettres majuscules
        if ((code >= 65) && (code <= 90))
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        // Lettres minuscules
        else if ((code >= 97) && (code <= 122))
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
      // Ajouter le caractére
      res += c;
    }
    // Résultat
    return res;
  };