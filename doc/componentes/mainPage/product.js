import { kanu } from "../../database/data.js";
import {moveShoppingCart} from './header.js';
import {renderTotalValue} from './shoopingCart/shoopingCart.js'

//función renderizar un producto
//product -> type (productCategory)
function renderProduct(producto) {
  //creo el elemento html
  const htmlProduct = document.createElement("div");
  htmlProduct.classList.add("c-Product");
  htmlProduct.setAttribute("data-id", producto.id);

  //le agrego información
  const view = `  
    <div class="c-Product__info">
        <img class="c-Product__img" src="${producto.imgUrl}" alt="">
        <div class="c-Product__name">${producto.name}</div>
        <div class="c-Product__price">$ ${producto.price}</div>
    </div>
    <div class="c-Product__buttonPay c-button">AGREGAR</div>

    <div class="c-Product__buttonUnits c-Product__buttonUnits--hidden">
          <div class="buttonUnits plus"></div>
          <p class="c-Product__buttonUnitsText"> Und</p>
          <div class=" buttonUnits minus"></div>
      </div>`;
  htmlProduct.innerHTML = view;
  
  //busca el producto dentro de los productos existentes del carrito
  const matchProductCart = kanu.cart.findProductToCart(producto.id)
  //evalua si el producto existe, para renderizar el botton y agregar las unidades
    if(matchProductCart){
      renderButtonProduct(htmlProduct)
      htmlProduct.querySelector(".c-Product__buttonUnitsText").textContent = `${matchProductCart.units} Und.`;
    }
  

  //obtengo el boton agregar y le doy funcionalidades
  let buttonAdd = htmlProduct.querySelector(".c-Product__buttonPay");
  buttonAdd.addEventListener("click", () => {
    addQuantity(producto);
    renderButtonProduct(htmlProduct);
    moveShoppingCart()
    renderTotalValue()
  });

  //elementos para sumar cantidades
  let buttonQuantityPlus = htmlProduct.querySelector(".plus");
  let buttonQuantityMinus = htmlProduct.querySelector(".minus");

  buttonQuantityPlus.addEventListener("click", () => {
    addQuantity(producto);
  });

  buttonQuantityMinus.addEventListener("click", () => {
    minusQuantity(producto.id);
  });

  return htmlProduct;
}

//product -> type (product)
function addQuantity(product) {
  //return -> type (productCart)
  const productCart = kanu.cart.addProductToCart(product);
  //HTMLProduct => HTML-CONTAINER-PRODUCTS
  const htmlProduct = document.querySelector([`div[data-id="${productCart.id}"]`]);
  //HTMLCardProduct => html-container card products
  const htmlCardProduct = document.querySelector([`div[data-idCart="${productCart.id}"]`])
  //evalua si existe un htmlproduct renderizado, si si renderiza las unidades a comprar, me permite usarlo independientemente de si no estoy dentro de la categoria
  if (htmlProduct) {
    htmlProduct.querySelector( ".c-Product__buttonUnitsText").textContent = `${productCart.units} Und.`;
  }

  //evalua si existe un htmlCardProduct, si si actualiza las unidades, el valor total invididual y grupal
  if(htmlCardProduct){
    htmlCardProduct.querySelector('.shoopingCartProduct__quantity').textContent = `${productCart.units} Und.`
    htmlCardProduct.querySelector('.shoopingCartProduct__totalValue').textContent = `$${productCart.totalValue}`
    renderTotalValue()
  }
}



//product -> type (product)
function minusQuantity(productId,quantity=1) {

  //que requiero para eliminar el producto el carrito -> ID, lo elimino
  const productCart = kanu.cart.removeProductToCart(productId,quantity);

  //obtengo los elementos para poder renderizar
  const htmlProduct = document.querySelector([`div[data-id="${productCart.id}"]`]);
  const htmlCardProduct = document.querySelector([`div[data-idCart = "${productCart.id}"]`])

  //evalua si las unidades del producto carrito son iguales a cero, si si los elimina
  if (productCart.units == 0) {
    //si existe el htmlProduct-- > debe cambiar a el otro boton
    htmlProduct ? renderButtonProduct(htmlProduct) : ''
    //htmlProductInCart      --> se debe eliminar
    htmlCardProduct.remove()

  } else {
    //htmlProductInProducts    --> debe aumental la unidad
    htmlProduct.querySelector(".c-Product__buttonUnitsText").textContent = `${productCart.units} Und.`;
    //htmlProductInCart        --> debe aumentar la unidad
    htmlCardProduct.querySelector('.shoopingCartProduct__quantity').textContent = `${productCart.units} Und.`
    //htmlProductInCart --> cambia el total de ese producto en el carrito
    htmlCardProduct.querySelector('.shoopingCartProduct__totalValue').textContent = `$${productCart.totalValue}`
  }

  renderTotalValue()

}


//juega con los botones para ocultar uno y hacer visible le otro
function renderButtonProduct(htmlProduct) {
  let buttonAdd = htmlProduct.querySelector(".c-Product__buttonPay");
  let buttonQuantity = htmlProduct.querySelector(".c-Product__buttonUnits");


  buttonAdd.classList.toggle("c-Product__buttonPay--hidden");
  buttonQuantity.classList.toggle("c-Product__buttonUnits--hidden");


}




export { renderProduct, addQuantity, minusQuantity ,renderButtonProduct};