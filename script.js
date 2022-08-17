`use strict`;
let secretNumber = Math.trunc(Math.random() *20) + 1;
let score=20;
let highscore=0;


const  displayMessage=function(message){
    document.querySelector('.message').textContent = message;

};
document.querySelector('.check').addEventListener('click', function(){
    
const guess = Number(document.querySelector('.guess').value)
console.log(guess,typeof guess)
console.log(secretNumber,typeof secretNumber);

//input eğer boş girilirse
if(!guess){
    displayMessage('bir sayı giriniz.');

}
//sayılar birbiriyle eşleşirse
else if(guess ===secretNumber){
    displayMessage('doğru tahmin!');
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
document.querySelector('number').style.width='30rem';




if(score>highscore){
    highscore = score;
    document.querySelector('.hightscore').textContent=highscore
}




}
//sayılar birbirleriyle eşleşmiyor ise
else if(guess !==secretNumber){
    if(score>1){
        displayMessage(guess>secretNumber?':çok yüksek':'çok düşük')
        document.querySelector('.score').textContent=score;

    }

else
{
displayMessage('oyunu kaybettin');
document.querySelector('score').textContent=0;
//sıfırın altına düştüğü zaman yeni skorumuz 0 olacak

}

}

});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    let secretNumber = Math.trunc(Math.random() *20) + 1;
displayMessage('tahmin ediliypr...');
document.querySelector('score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#242624';
document.querySelector('.number').style.width='15rem';



});