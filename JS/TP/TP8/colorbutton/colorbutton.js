function randomComponent(){
    console.log("random")
    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255); 
    let rgb = [r, g, b];
    return rgb
}
function main(){
    let button = document.getElementById("colorButton");

    button.addEventListener("click", function(e){
        let colors = randomComponent();
        e.preventDefault();
        console.log( "rgb("+colors[0]+","+colors[1]+","+colors[2]+")" )
        button.style.backgroundColor = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";
    });
}


main();