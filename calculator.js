const display= document.querySelector(".screen");
const buttons= document.querySelectorAll('.btn');
const equalButton=document.querySelector('.equal');
const clearbutton=document.querySelector('.clear');
const deletebutton=document.querySelector('.del');
const bracket=document.querySelector(".bracket")


buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        display.innerText +=btn.innerText;
    })
});

clearbutton.addEventListener('click',()=>{
    display.textContent="";
})
deletebutton.addEventListener('click',()=>{
    display.textContent=display.textContent.slice(0,-1);
})
equalButton.addEventListener('click',()=>{
    try{ display.innerText=eval(display.innerText);}
    catch(error){
     
        display.innerText="Error";
    }
});
