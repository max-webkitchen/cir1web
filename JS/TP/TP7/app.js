let button = document.createElement("button")
button.id = "uniqueId";
button.innerText = "Testez moi !"
let status = document.createElement("div")
status.id = "status";

document.body.appendChild(button)
document.body.appendChild(status)

//let btnClick = document.querySelector('#buttonclick')
//let status = document.querySelector('.status')
let ul = document.createElement('ul')
let li = null

function addEventStatus(label) {
    li = document.createElement('li')
    li.textContent = label
    ul.appendChild(li)
}






button.addEventListener('click', function(){
    addEventStatus("Bouton cliqué")
})
button.addEventListener('dblclick', function(){
  addEventStatus("Bouton double cliqué")
  alert("double click")
})

button.addEventListener('mouseover', function(){
    addEventStatus("Bouton survole")

})
button.addEventListener('mouseleave', function(){
    addEventStatus("Bouton quitté")
})

status.appendChild(ul)







let statusMouse = document.createElement("div")
statusMouse.id = "statusmouse";

statusMouse.addEventListener('mousemove', function(event){
console.log(event)

  var html =  "offsetX = " + event.offsetX +"<br/>"
  + "offsetY = " + event.offsetY +"<br/>";

  statusMouse.innerHTML = html;
})

statusMouse.addEventListener('mouseleave', function(event){
  statusMouse.innerHTML = "";
})

document.body.appendChild(statusMouse)








function checkEcouteur() {
  var stringSearch = "bingo"
  console.log(ecouteurClavier.join('').search(stringSearch))
  if (ecouteurClavier.join('').search(stringSearch) !== -1) {
       findBingo = true
       alert("BINGO") 
  }
}



let findBingo = false
let ecouteurClavier = []

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if (keyName === 'Control') {
        return;
    }

    if (event.ctrlKey) {
        addEventStatus(`Combinaison de CTRL + ${keyName}`)
    } else {
        addEventStatus(`Touche ${keyName}`);
        ecouteurClavier.push(keyName)
        if(!findBingo) { checkEcouteur() }
    }
  }, false);






// const form = document.getElementById('formcontact');
// let email = document.getElementById('email');
// let prenom = document.getElementById('prenom');
// let datevalidite = document.getElementById('datevalidite');

// form.addEventListener('submit', logSubmit);

// function emailIsValid (email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }

//   datevalidite.addEventListener('keydown', (event) => {
//     if(datevalidite.value.length == 2){
//         datevalidite.value += "/"
//     }
//   }
  
//   )


// function logSubmit(event) {
//     event.preventDefault();
//     var submitForm = true

//   if(prenom.value!=="") {
//     console.log(`${prenom.value} est un magnifique prénom`)
//   }
//   else {
//     console.log(`Merci d'indiquer votre magnifique prénom`) 
//     submitForm = false
//   }

//   if(emailIsValid(email.value)) {
//       console.log(`${email.value} est une adresse valide`)
//   }
//   else {
//     console.log(`${email.value} n'est pas une adresse valide`) 
//     submitForm = false
//   }

//   if(submitForm) {
//       console.log("Je pourrais soumettre le formulaire")
//       form.submit(); 
//   }


// }
  
