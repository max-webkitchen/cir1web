function repeat(s, n){
    return s.repeat(n);
}










function truncate(s, n){
    if (n>=s.length){
       return s; 
    }
    else{
        return s.substring(0, n-3)+"...";
    }   
}









function isPalindrome(s) {
    return s == s.split('').reverse().join('');
  }









function isPalindrome2(s){   //fonction plus efficace
    let taille = s.length;
    let lim = (taille/2) + 1;
    for(let i = 0; i < lim; i++){
        if(s[i] != s[taille - 1 - i]){
            return false;
        }
    }
    return true;
}









function swapCase(s){
    let taille = s.length;
    let string = "";
    for(let i = 0; i < taille; i++){
        if(s[i] == s[i].toUpperCase()){      //Si s[i] est une majuscule
            string += s[i].toLowerCase();
        }
        else if(s[i] == s[i].toLowerCase()){     //Si s[i] est une minuscule
            string += s[i].toUpperCase();
        }
        else{
            string += s[i];
        }
    }
    return string;
}