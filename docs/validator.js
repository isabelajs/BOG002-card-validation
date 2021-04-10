const validator = {
  isValid,
  maskify
};



function isValid (creditCardNumber){

   //obtengo el largo del número
   let lenghtNumberCard = creditCardNumber.length
   //hago el reverse del número, split separa el string en un array, reverse lo invierte, join lo une de nuevo en número
   let reverseNumberCard = creditCardNumber.split('').reverse().join('');
   let total = 0

   for (let position = 0 ; position < lenghtNumberCard; position ++){
       //como ahora necesitamos iniciar desde la posicion 1, esto siempre le suma a la posicion
       let newPosition = position+1

       if( newPosition % 2 == 0){
           let newNumber =reverseNumberCard[position]*2

           newNumber > 9
           ? total += newNumber-10+1
           : total += newNumber
       }
       else{
           total += parseInt(reverseNumberCard[position]) 
       }
   }

   if (total % 10 == 0){
       return true
   }
   else{
       return false
   }

}

console.log(isValid(''));


function maskify(creditCardNumber) {
    var size = creditCardNumber.length;//saco el tamaño total del número de tarjeta
    var newCreditCard = "";
    for(var i = 0; i< size - 4;i++)//declaro el recorrido sin las últimas 4 cifras 
      {
        newCreditCard += "#";//reemplazo
      }
     return newCreditCard + creditCardNumber.substring(size-4,size);//con substring me aseguro de incluir las ultimas 4 cifras sin modificarlas 
    
  }

export default validator;



