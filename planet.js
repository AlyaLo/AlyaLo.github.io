let wrapper = document.querySelector(".wrapper");
let speed = 3;
function Planet() {
    this.namePlanet = ["redPlanet.png","whitePlanet.png"];
    this.planets = [];
    this.randomPlanet = function(){
        return this.namePlanet[Math.round(0 + Math.random() * 1)];
    }
   
    this.spawn = function(){
        let img = document.createElement("img");
    
        img.setAttribute('src', this.randomPlanet());
        img.setAttribute('class', 'planet');
        img.style.top = '-64px';
        img.style.left = Math.round(0 + Math.random() * 1058) + 'px';
        this.planets.push(img);
        wrapper.appendChild(img);
    };
    
}

let planet = new Planet();

function gameOver(planet){
    let leftRocket = parseInt(rocket.style.left,10);
    let topPlanet = parseInt(planet.style.top,10);
    let leftPlanet = parseInt(planet.style.left,10);

    if( leftPlanet >= leftRocket && (leftRocket + 100)  >= leftPlanet && topPlanet >= 800 ){
        planet.remove();
        rocket.remove();

        clearInterval(gameOverInterval);
        clearInterval(spawnInterval);
        clearInterval(donutsSpawnInterval);
        clearInterval(donutsMoveInterval);
        clearInterval(speedInterval);
        
        
        checkHighScore(counterOfDonuts);

        speed = 3;
        divCounter.innerHTML = 0;
        createGameOverButton();
    }
}

function createGameOverButton(){
    let div = document.createElement("div");
    let button = document.createElement("button");
    
    button.setAttribute('class', 'buttonOver');
    button.setAttribute('onclick', 'restart()');
    button.innerHTML = 'Restart';
    
    div.setAttribute('class','gameOver');
    div.innerHTML = '<span id = "GO"> Game Over! </span> <span id = "result"> <br /> Result: ' + counterOfDonuts + '</span>';
    
    
    wrapper.appendChild(div);
    div.appendChild(button);

    
    button.addEventListener('click', restart);
}

function clear(){
    let div = document.querySelector('.buttonOver');
    let button = document.querySelector('.gameOver');
    
    div.remove();
    button.remove();
}

function restart(){
    
    for(let value of planet.planets){
        value.remove();
    }
    
    for(let donut of donuts){
        donut.remove();
    }
    
    donuts = [];
    planet.planets = [];
    
    clear();

    wrapper.appendChild(rocket);
    counterOfDonuts = 0;
    
    gameOverInterval = setInterval(movePlanet, 10);
    spawnInterval = setInterval(spawn, 600);
    donutsSpawnInterval = setInterval(spawnDonut, 1505);
    donutsMoveInterval =  setInterval(moveDonuts,10);
    speedInterval = setInterval( () => speed++, 30000);
}

function movePlanet(){
    for(let value of planet.planets){
        let top1 = parseInt(value.style.top, 10) + speed;
        
        gameOver(value);
        
        value.style.top = top1 + "px";  
        if(parseInt(value.style.top, 10) > 900 ){
            value.remove(); 
            planet.planets.shift();
        }   
        
    }
}

let gameOverInterval = setInterval(movePlanet, 10);

let speedInterval = setInterval( () => speed++, 30000);

let spawn = planet.spawn.bind(planet);

let spawnInterval = setInterval(spawn, 600);