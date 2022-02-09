let donuts = [];
let divCounter = document.getElementById("counter");
let counterOfDonuts = 0;
function spawnDonut(){
    let donut = document.createElement("img");
    
    donut.setAttribute('src', 'donuts.png');
    donut.setAttribute('class', 'donut');
    donut.style.top = '0px';
    donut.style.left = Math.round(0 + Math.random() * 1058) + 'px';
    
    donuts.push(donut);
    
    wrapper.appendChild(donut);
}

function donutCouner(donut){
    let leftRocket = parseInt(rocket.style.left,10);
    let topDonut = parseInt(donut.style.top,10);
    let leftDonut = parseInt(donut.style.left,10);

    if( leftDonut >= leftRocket && (leftRocket + 100)  >= leftDonut && topDonut >= 800 ){
        donut.remove();
        
        donuts.shift();
        
        counterOfDonuts++;
        console.log(counterOfDonuts);
        divCounter.innerHTML = counterOfDonuts;
    }
}

function moveDonuts(){
    for(let value of donuts){
        donutCouner(value);
        
        let top1 = parseInt(value.style.top, 10) + 3;
        
        value.style.top = top1 + "px";  
        
        if(parseInt(value.style.top, 10) > 900 ){
            value.remove(); 
            donuts.shift();
        }   
    }
}

let donutsSpawnInterval = setInterval(spawnDonut, 1505);

//let donutsMoveInterval = setInterval(moveDonuts,10);