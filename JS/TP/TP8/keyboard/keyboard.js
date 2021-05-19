function main(){
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        let keyPressed = document.getElementById(keyName);
  
        if(keyPressed !== null) {
            keyPressed.classList.toggle("pressed");
        }

  
      }, false);


      document.addEventListener('keyup', (event) => {
       
        const collectionsKey = document.getElementsByClassName('key');
        for(i=0; i< collectionsKey.length; i++){
            collectionsKey[i].classList.remove("pressed")
            collectionsKey[i].classList.toggle("released")
        }
        
  
      }, false);
    z

}


main();