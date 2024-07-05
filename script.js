score=0;
cross=true;

function updateScore(score){
    scorepart.innerHTML="Your Score: "+score;
}
audio=new Audio('MemoryReboot.mp3')
setTimeout(()=>{
    audio.play();
},1000)
document.onkeydown=function(e){
    console.log("key code is : ",e.keyCode);
    if(e.keyCode == 37){
        kong=document.querySelector('.kong');
        kongX=parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
        kong.style.left=(kongX-112)+"px";
    }
    if(e.keyCode == 38){
        kong=document.querySelector('.kong');
        kong.classList.add('animateKong');
        setTimeout(()=>{
            kong.classList.remove('animateKong');
        },700)
    }
    if(e.keyCode == 39){
        kong=document.querySelector('.kong');
        kongX=parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
        kong.style.left=(kongX+112)+"px";
    }
}

setInterval(()=>{
    kong=document.querySelector('.kong');
    gameOver=document.querySelector('.gameOver');
    godzilla=document.querySelector('.godzilla');
    kx=parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
    ky=parseInt(window.getComputedStyle(kong,null).getPropertyValue('top'));

    gx=parseInt(window.getComputedStyle(godzilla,null).getPropertyValue('left'));
    gy=parseInt(window.getComputedStyle(godzilla,null).getPropertyValue('top'));

    offsetX=Math.abs(kx-gx);
    offsetY=Math.abs(ky-gy);
    // console.log(offsetX,offsetY)
    if(offsetX<113 && offsetY<52){
        gameOver.style.visibility='visible';
        godzilla.classList.remove('animategodzilla')
        setTimeout(()=>{
            audio.pause();
        },500)
    }
    else if(offsetX<150 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)
    }
},10);