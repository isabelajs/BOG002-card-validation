import { cartProduct } from "./ProductCart.js";
import { kanu } from "../../../database/data.js";
import {minusQuantity} from "../product.js"

const shoopingCart = () => {
  //creo el elemento html del carrito
  const cShoppingCart = document.createElement("div");
  cShoppingCart.classList.add("shoopingCart");

  const view = `   <div class="shoopingCart__header">
                        <div class="l-shoopingCart__title">
                            <h2 class="shoopingCart__title">Mi Canasta</h2>
                            <p class="shoopingCart__emptyCart">Vaciar canasta</p>
                        </div>
                        <div class="l-shoopingCart__close icon"></div>
                    </div>

                    <div class="shoopingCart__products c-scroll"></div>
                    
                    <div class="shoopingCart__summary">
                        <div class="l-shoopingCart__total">
                            <p class="shoopingCart__summaryTitle">Total de compra:</p>
                            <p id="shoopingCartTotalValue" class="shoopingCart__summaryValue">$</p>
                        </div>
                        <div class="shoopingCart__buttons">
                            <div id="shoopingCartPayment" class="c-button buttonCart">FINALIZAR</div>
                            <div id="shoopingCartClose" class="c-button c-button--blue buttonCart">VOLVER</div>
                        </div>
                    </div>`;
  cShoppingCart.innerHTML = view;
  

  //vacio el carrito
  let emptyCart = cShoppingCart.querySelector(".shoopingCart__emptyCart");
  emptyCart.addEventListener("click", () => {


      //debo recorrer el carrito y restarle a todos todas sus cantidades
      // while(kanu.cart.productLists.length > 0){
      //   const cartProduct = kanu.cart.productLists[0]
      //   minusQuantity(cartProduct.id,c
    let datosRemove = []
    
    for (let element of kanu.cart.productLists){
      datosRemove.push([element.id,element.units]);
    }

    datosRemove.forEach(posicion =>{
      minusQuantity(posicion[0], posicion[1])
    })

  });

  
  //obtengo el boton close, para ocultar-visualizar el carrito
  let buttonClose = cShoppingCart.querySelector(".l-shoopingCart__close");
  buttonClose.addEventListener("click", () => {
    cShoppingCart.classList.remove("shoopingCart--visible");
    document.body.style = "";
  });

  //obtengo el botón volver me retorna a la página principal
  let buttonReturn = cShoppingCart.querySelector("#shoopingCartClose");
  buttonReturn.addEventListener("click", () => {
    cShoppingCart.classList.remove("shoopingCart--visible");
    document.body.style = "";
  });

  //direcciona a la pagina de pagos
  let buttonPayment = cShoppingCart.querySelector("#shoopingCartPayment");
  buttonPayment.addEventListener("click", () => {
    window.location = "./payPage.html";
  });
  return cShoppingCart;
};

function rendCartProducts() {
  let containerCartProducts = document.querySelector(".shoopingCart__products");

  // si el container tiene productos se borran y se agregan nuevamente, sino se agregan
  if (containerCartProducts.hasChildNodes() == true){

    //puedo usar este modo para borrar todos sus hijos o el inner
    // while(containerCartProducts.hasChildNodes()==true){
    //   containerCartProducts.childNodes.forEach(product=>{
    //     containerCartProducts.removeChild(product)
    //   })}
    containerCartProducts.innerHTML = ''
    
     kanu.cart.productLists.forEach((Product) => {
    containerCartProducts.appendChild(cartProduct(Product));
      });
  

  }else{
    kanu.cart.productLists.forEach((Product) => {
      containerCartProducts.appendChild(cartProduct(Product));
    });
  }

  return containerCartProducts;
}

function renderTotalValue(){
    let totalValue = document.querySelector(".shoopingCart__summaryValue")
    totalValue.textContent = `$ ${kanu.cart.total()}`
  
}

export { shoopingCart, rendCartProducts, renderTotalValue };
