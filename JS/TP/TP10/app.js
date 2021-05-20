const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
canvas.width = 400
canvas.height = 400


ctx.fillStyle = "#BADA55"
//ctx.fillRect(20,20,100,50)

function randomColor(){
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
}



function drawRect (){
    requestAnimationFrame(drawRect)
    ctx.fillStyle = randomColor()
    rectWidth = Math.floor(Math.random() * 30)
    rectHeight = Math.floor(Math.random() * 30)
    posX = Math.floor(Math.random() * canvas.width - rectWidth)
    posY = Math.floor(Math.random() * canvas.height - rectHeight)
    console.log(posX);

    ctx.fillRect(posX,posY,rectWidth,rectHeight)

}

//drawRect()

const dataArray = [40,20,56,27,50,75];
function drawGraph(position){
  
    for(i = 0; i< dataArray.length; i++) {
        console.log("data");
        ctx.fillStyle = randomColor()
        if(position == 'top') {
        //    timer = 0
        //    let data1 = dataArray[i]
        //    console.log(data1)
        //    console.log(timer)
        //     setInterval(function() {
        //         timer ++
        //         if(timer >= data1){
        //             clearInterval()
        //             timer = 0
        //         }
        //         else {
        //             console.log('i' + i)
        //             ctx.fillRect(40*i,0,30,timer*3)  
        //         }
               
        //     } , 10, data1)
           ctx.fillRect(40*i,0,30,dataArray[i]*3)  
        }
        else{
            ctx.fillRect(40*i,canvas.height,30,-dataArray[i]*3)  
        } 
    }
}

//drawGraph('top')



function drawCross(){
    ctx.beginPath()
    ctx.moveTo(40,40)
    ctx.lineTo(80,80)
    ctx.lineWidth = 4 // epaisseur de la ligne
    ctx.lineCap = 'round' // epaisseur de la ligne
    ctx.strokeStyle = randomColor()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(40,80)
    ctx.lineTo(80,40)
    ctx.stroke()
}

//drawCross();



function drawLines(){
    ctx.beginPath()
    ctx.moveTo(200,200)
    ctx.lineTo(80,80)
    ctx.lineWidth = 10 // epaisseur de la ligne en px
    ctx.lineCap = 'round' // round ou square les embouts du tracé
    ctx.strokeStyle = randomColor()
    ctx.stroke()

}

drawLines();

let r = 0
function drawCircle(){
    requestAnimationFrame(drawCircle)
  
    console.log(r)
    if(r > canvas.width) {
        //r--
    }
    else {
        r+= 10 
    }

    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
    ctx.arc(150,150,r,0,Math.PI * 2, true)
    // ctx.lineWidth = 10 // epaisseur de la ligne en px
    // ctx.lineCap = 'round' // round ou square les embouts du tracé
    ctx.fillStyle = '#000'
    ctx.fill()
    ctx.stroke()

}
drawCircle();
