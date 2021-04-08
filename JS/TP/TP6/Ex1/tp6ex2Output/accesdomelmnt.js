///
console.log("============================================")
let titre_page = document.title;
let page = document.body;
let lien = document.links;

console.log('Titre de la page : ' + titre_page +
      '\nType du contenu de la page : ' + page +
      '\nLa troisième bande d\'annonce est : ' +lien[2]); // lien[2].href
console.log("============================================")
////
let TypeMF = document.getElementById('1');
console.log("Le titre "+ TypeMF.innerHTML +" est de type : " + TypeMF);
console.log("============================================")
////
let tabp = document.getElementsByTagName('p');
let tabim = document.getElementsByTagName('img');
console.log("Notre page contient "+tabp.length+" paragraphes et "+tabim.length+" images");
console.log("============================================")
///
let tabsynop = document.getElementsByClassName('synop');
console.log('Notre page contient ' + tabsynop.length + ' synopsis' + ' de films.');
console.log("============================================")
///
let year = document.querySelector('h1');
console.log('La première rubrique des films date de l\'année ' + year.innerHTML);
let tab2016 = document.querySelectorAll('.y2016');
console.log('Il existe ' + tab2016.length +' films sous la rubrique 2016');
console.log("============================================")
///
var desc = document.querySelector('#y1940');
let titre = document.getElementById('2').innerHTML;
console.log('Synopsis du film :' + titre  + ':\n' + desc.innerHTML);
console.log("============================================")

