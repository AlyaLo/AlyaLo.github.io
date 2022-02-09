let rocket = document.getElementById("rocket");

let left = 500;
let pushed = false;
rocket.style.left = '500px';

document.addEventListener('keydown', e =>{
    if(e.keyCode == 37){
        if (left <= 35 ) left = 35;
        
        left -= 35;
        rocket.style.left = left + 'px';
        
    } else if(e.keyCode == 39){
        if(left >= 975) left = 975;
        
        left += 35;
        rocket.style.left = left + 'px';        
    } else if(e.keyCode == 80){
        if(pushed){
            pushed = false;
            gameOverInterval = setInterval(() =>{
                movePlanet(); 
                moveDonuts();
            }, 10);
            spawnInterval = setInterval(spawn, 600);
            donutsSpawnInterval = setInterval(spawnDonut, 1505);
            speedInterval = setInterval( () => speed++, 30000);
            
            document.querySelector('.pause').remove();
            
        } else{
            pushed = true;
            
            cleatePauseCard();
            
            clearInterval(gameOverInterval);
            clearInterval(spawnInterval);
            clearInterval(donutsSpawnInterval);
            clearInterval(speedInterval);
        }
    }
});

