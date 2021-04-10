import validator from './validator.js';

// callback -> llamada devuelta (funcion)
const rejectModal =(message,typeError,callback)=>{

    let imgUrl = ' ';
    switch (typeError) {
        case 'Error':
            imgUrl = "./assets/modalIncorrect.svg"
            break;
        case 'Accept':
            imgUrl ="./assets/modalCorrect.svg"
            break;
    }
            

    const htmlModal =document.createElement('div')
    htmlModal.classList.add('modal-container')
    const view = `  <div class= "modal modal--close">
                        <img class = "modal__img" src="${imgUrl}">
                        <div class="modal__text">
                            <h2 class= "text__title">${typeError}</h2>
                            <p class="text__text">${message}</p> 
                        </div>
                        <div class=" c-button modal__button">Accept</div>
                    </div>`
    htmlModal.innerHTML = view

    let buttonBack = htmlModal.querySelector('.modal__button')

    //quito el evento de escribir, presionar tecla
    document.onkeydown = (e) => {
        e.preventDefault()
    }

    buttonBack.addEventListener("click", ()=>{
        document.onkeydown = ""
        htmlModal.remove()

        //permanente de una llama devuelta
        callback()

    })



    return htmlModal
}

  
//get the form
let form = document.querySelector('.c-formulario');
//get the element input  where the card number is entered
let inputCardNumber = document.querySelector('#cardNumber');
//credit card number
let creditCardNumber = "";
// botton para regresar al menu
let buttonBackMain = document.querySelector('.c-button--back')


//stop the event of pasting information into the form
inputCardNumber.addEventListener('paste',(evt)=>{
    evt.preventDefault()
})

// run the mask function
inputCardNumber.addEventListener('input',(event)=>{
    if(event.inputType == 'insertText'){
        creditCardNumber += event.data;
    }
    else{
        creditCardNumber = creditCardNumber.substring(0,creditCardNumber.length-1);
    }
    //enmascara el valor
    inputCardNumber.value = validator.maskify(inputCardNumber.value)

})


//stop the event submit,es decir el de enviar información, este evento por defecto se activa al darle click a un input type boton
form.addEventListener('submit',(evt)=>{
    evt.preventDefault()

    // evalua si el valor corresponde a un número de tarjeta o no
    if(validator.isValid(creditCardNumber) == false){
        form.insertAdjacentElement ('afterend',rejectModal('El número de la tarjeta no se ha validado, por favor ingrese nuevamente el dato','Error',()=>{
            document.getElementById('cardNumber').value = ""
            document.getElementById('cardNumber').focus()
        }))
        

    }else{
        form.insertAdjacentElement('afterend', rejectModal('Tu tarjeta ha sido validada con éxito','Accept'))
        // reseteo el formulario
        form.reset()
    };

    creditCardNumber = "";
    
    
})

buttonBackMain.addEventListener('click', ()=>{
    window.location ="./index.html"
})
//Método para seleccionar solo un checkbox
let Checked = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('option')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}





































