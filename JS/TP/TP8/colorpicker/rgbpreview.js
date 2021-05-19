

function main(){
    let r = document.getElementById('rValue');
    let v = document.getElementById('gValue');
    let b = document.getElementById('bValue');
    let preview = document.getElementById('preview');
    let rgb = document.getElementById('rgb');





    r.addEventListener('change',function(){
        setColor()
    })

    v.addEventListener('change',function(){
        setColor()
    })

    b.addEventListener('change',function(){
        setColor()
    })





    function setColor(){
        preview.style.backgroundColor = "rgb("+r.value+","+v.value+","+b.value+")";
        let hexa = rgbToHexa(parseInt(r.value),parseInt(v.value),parseInt(b.value))
        rgb.innerText = hexa
    }



    
    function convertHexa (code){
        var hexa = code.toString(16)
        if(hexa.length <2){
            hexa = "0" + hexa;
        }
        return hexa
    }
    
    function rgbToHexa(r,v,b){
        let Rouge = convertHexa(r)
        let Vert = convertHexa(v)
        let Bleu = convertHexa(b)
        return '#'+Rouge+Vert+Bleu
     }
    

}


main();