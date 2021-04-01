window.addEventListener('keydown',playsound);
function removeplaying(e){
    // console.log(e);
    this.classList.remove('playing')
}
const keys= document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeplaying));
function playsound(e){
   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing')
    // console.log(audio);
    // console.log(key);
    console.log(e.keyCode);
    // key.classList.remove('playing')
    
}