import { addQuantity, minusQuantity } from "../product.js";
import {renderTotalValue} from '../shoopingCart/shoopingCart.js'

//product => cartProduct
const cartProduct = (product) => {
  const shoopingCartProduct = document.createElement("div");
  shoopingCartProduct.classList.add("shoopingCartProduct");
  shoopingCartProduct.setAttribute('data-idCart', product.id)

  const view = `    <div class="shoopingCartProduct__remove icon"></div>
                    <img class="shoopingCartProduct__img" src="${product.imgUrl}">

                    <div class="l-shoopingCartProduct__info">
                        <div class="l-shoppingCartProduct__infoText">
                        <p class="shoopingCartProduct__name"> ${product.name}</p>
                        <p class="shoopingCartProduct__price">Precio unitario: $${product.price}</p>
                        </div>

                        <div class="l-shoppingCartProduct__infoValue">
                            <div class="l-shoopingCartProduct__selectQuantity">
                                <div class="c-button shoopingCartProduct__plus plus"></div>
                                <p class="shoopingCartProduct__quantity"> ${product.units} Und</p>
                                <div class="c-button shoopingCartProduct__minus minus"></div>
                            </div>
                            <div class="shoopingCartProduct__totalValue">$${product.totalValue}</div>
                        </div>
                    </div>`;

  shoopingCartProduct.insertAdjacentHTML("afterbegin", view);

  //remuevo el elemento con la x
  let buttonRemove = shoopingCartProduct.querySelector(".shoopingCartProduct__remove");
  buttonRemove.addEventListener("click", () => {
    //visualmente
    shoopingCartProduct.remove();
    //remover el producto dentro de la base de datos
    minusQuantity(product.id,product.units)
  });

  //añado unidades
  let buttonUnitsPlus = shoopingCartProduct.querySelector(".shoopingCartProduct__plus");
  buttonUnitsPlus.addEventListener("click", () => {
    addQuantity(product);
  });

  //elimino unidades
  let buttonUnitsMinus = shoopingCartProduct.querySelector(".shoopingCartProduct__minus");
  buttonUnitsMinus.addEventListener("click", () => {
    minusQuantity(product.id)
  });

  return shoopingCartProduct;
};

export { cartProduct };

{
  /* <div class="shoopingCartProduct">
  <div class="shoopingCartProduct__remove icon"></div>
  <div class="shoopingCartProduct__img"></div>

  <div class="l-shoopingCartProduct__info">
    <div class="l-shoppingCartProduct__infoText">
      <p class="shoopingCartProduct__name">Alimento para perro Monello x 1.5 Kg</p>
      <p class="shoopingCartProduct__price">Precio unitario: $1.990</p>
    </div>

    <div class="l-shoppingCartProduct__infoValue">
        <div class="l-shoopingCartProduct__selectQuantity">
            <div class="c-button shoopingCartProduct__plus plus"></div>
            <p class="shoopingCartProduct__quantity"> xx Und</p>
            <div class="c-button shoopingCartProduct__minus minus"></div>
        </div>
        <div class="shoopingCartProduct__totalValue">$1.990</div>
    </div>
  </div>
</div>; */
}
