
const cssbuttonsIo = document.querySelector('.cssbuttons-io')
const btn = document.querySelectorAll('.btn')
const htmlBtn = document.getElementById('html')
const htmlContent = document.querySelector('.htmlContent')
const ouputContainet = document.querySelector('.ouput-container')
const card = document.querySelectorAll('.card');
let number = 1;
let myIndex = 1;

cssbuttonsIo.addEventListener('click',()=>{
    if(myIndex > btn.length){
        for(let i = 0; i < btn.length; i++){
            btn[i].style.display = 'none'  
            myIndex= 0; 
        } 
        myIndex++;
    }
    (btn[myIndex-1]).style.display = 'block' 
    myIndex++;
})
function change(){
    for(let i = 0; i < card.length; i++){
        card[i].style.display = 'none' 
    }
    card[number-1].style.display = 'flex' ;
    number++
    if(number > card.length){
       number = 1
    }   
}
setInterval(change,2000)
