
let spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Hi !', " It's good that you are here :)",'My name is Marek Zemla, and I am a JavaScript developer...','Continue on to my website to see what I can  do for you...', " Let's start!"]
let activeLetter = -10;
let activeText = 0;


const addLetter = () => {
    if(activeLetter >= 0){
    spnText.textContent += txt[activeText][activeLetter];}
    activeLetter++
     if(activeLetter === txt[activeText].length){
        activeText++
        if(activeText === txt.length)return ;
        return setTimeout(()=>{
        activeLetter = -10;
        spnText.textContent = ""; 
        addLetter(); 
        },2000)
    }
   setTimeout(addLetter,100);
}
addLetter();
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
