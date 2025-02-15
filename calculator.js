// accesesing class and id //
const display= document.querySelector(".screen");
const buttons= document.querySelectorAll('.btn');
const equalButton=document.querySelector('.equal');
const clearbutton=document.querySelector('.clear');
const deletebutton=document.querySelector('.del');
const bracket=document.querySelector(".bracket")

//adding event listener for all button//
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        display.innerText +=btn.innerText;
    })
});
//clearing display after click on c or clear class//
clearbutton.addEventListener('click',()=>{
    display.textContent="";
})
//deleting button//
deletebutton.addEventListener('click',()=>{
    display.textContent=display.textContent.slice(0,-1);
})
//uses eval builtin function//
equalButton.addEventListener('click',()=>{
    try{ display.innerText=eval(display.innerText);}
    catch(error){
     
        display.innerText="Error";
    }
});
