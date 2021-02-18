// let num = 255
// let txt = "255"
// let bin = true
// let flt = 7.23


//ou

let num, txt, bin, flt
num = 255
txt = "255"
bin = true
flt = 7.23

console.log(num + " de type : " + typeof(num));
console.log(txt + " de type : " + typeof(txt));
console.log(bin + " de type : " + typeof(bin));
console.log(flt + " de type : " + typeof(flt));

console.log("--------------------------------");
console.log("ADDITION ET AFFECTATION");
console.log("--------------------------------");
num += 2
console.log(num + " de type : " + typeof(num));

//num = num + 2
console.log("--------------------------------");
console.log("MULTIPLICATION ET AFFECTATION");
console.log("--------------------------------");
flt *= 3        
//flt = flt * 3

console.log(flt + " de type : " + typeof(flt));

console.log("--------------------------------");
console.log("DIVISION ET AFFECTATION");
console.log("--------------------------------");

flt /= 2
//flt = flt / 2   

console.log(flt + " de type : " + typeof(flt));

console.log("--------------------------------");
console.log("CREATION D'UN TABLEAU");
console.log("--------------------------------");

let tableau = [12,23,"Hello",false,[34,12,45]]
console.log(tableau + " de type : " + typeof(tableau));


console.log("--------------------------------");
console.log("CREATION D'UN TABLEAU");
console.log("--------------------------------");

let joueur = [23, 'Michael', 'Jordan', 45];

// for(i=0;i<joueur.length;i++){
//     console.log(joueur[i]);
// }
console.log(joueur.join('#'));

// console.log(typeof(num));
// console.log(typeof(txt));
// console.log(typeof(bin));
// console.log(typeof(flt));


let joueur23 = {nom:'Jordan',prenom:'Michael', numero:23, equipe:'Bulls', ville:'Chicago'}


console.log("--------------------------------");
console.log("FONCTION SIMPLE MISE AU CARRE");
console.log("--------------------------------");


function metAuCarre(nombre){
    return nombre *= nombre
}

console.log(metAuCarre(3))

