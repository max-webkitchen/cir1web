let a = 23  // entier
let aPrim = 23  // entier
let b = 1.455664335     // nombre flottant
let c = "Chaine de caractère"
let d = false
let e = ['item 1','item 2', 'item 3', 'item 4']
let f = {nom:'Lorentz',prenom:'Maxime',age:41,fonction:'Web front'}
let h = [f,{nom:'Jean',prenom:'Valjean',age:160,fonction:'baroudeur'},{nom:'Michel',prenom:'Henri',age:85,fonction:'SK'}]
// console.log(a)
// console.log(c)
// console.log(a*aPrim)
// console.log(a/aPrim)
// console.log(a-aPrim)
// a+=a
// console.log(a)
// a+=a
// console.log(a)
// a*=3
// console.log(a)
// console.log(e[0])
// console.log(e[1])
for(i=0;i<e.length;i++){
    console.log('Valeur de '+ (i) + ' : ' +e[i] )
}
console.log(f.nom + ' ' + f.prenom)

for(i=0;i<h.length;i++){
    console.log('Valeur de '+ (i) + ' : ' +h[i].prenom )
}
h.push({nom:'Arnaux',prenom:'Bernard',age:14,fonction:'Collegien'})

console.log(h.length)

for(i=0;i<h.length;i++){
    console.log('Valeur de '+ (i) + ' : ' +h[i].prenom + ' ' + h[i].fonction  )
}