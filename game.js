let rocket = document.getElementById("rocket");

let left = 0;

rocket.style.left = '0px';

document.addEventListener('keydown', e =>{
    if(e.keyCode == 37){
        if (left <= 35 ) left = 35;
        
        left -=35;
        rocket.style.left = left + 'px';
        
    } else if(e.keyCode == 39){
        if(left >= 975) left = 975;
        
        left +=35;
        rocket.style.left = left + 'px';        
    }
});

