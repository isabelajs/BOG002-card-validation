import validator from './validator.js';


const rejectModal =(message,typeError)=>{
    
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
    buttonBack.addEventListener("click", ()=>{
        htmlModal.remove()
    })


    return htmlModal
}

  
  
//get the form
let form = document.querySelector('.c-formulario');
//get the element input  where the card number is entered
let inputCardNumber = document.querySelector('#cardNumber');
//credit card number
let creditCardNumber = "";


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

    console.log(creditCardNumber);
    // evalua si el valor corresponde a un número de tarjeta o no
    if(validator.isValid(creditCardNumber) == false){
        form.insertAdjacentElement ('afterend',rejectModal('El número de la tarjeta no se ha validado, por favor ingrese nuevamente el dato','Error'))
    }else{
        form.insertAdjacentElement('afterend', rejectModal('Tu tarjeta ha sido validada con éxito','Accept'))
        form.reset()
    };
    // reseteo el formulario
    
    creditCardNumber = ""
})














































