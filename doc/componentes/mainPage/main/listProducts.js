import { kanu } from "../../../database/data.js";
import { renderProduct } from "../product.js";

// creo el contenedor productos de categoria
function listProducts() {
  let cProducts = document.createElement("section");
  cProducts.classList.add("productos");

  const view = `  <div class="productos__title">Nuestros productos</div>
                  <div class="productos__container"></div>`;

  cProducts.insertAdjacentHTML("afterbegin", view);

  //renderizo la primera categoria de productos por defecto
  renderProducts(kanu.categories[0],cProducts.querySelector(".productos__container"));

  return cProducts;
}

//renderiza los productos de acuerdo a su categoria dentro de un contenedor de productos
function renderProducts(categoria, containerProducts) {
  //la primera vez los productos son inyectados de manera manual
  let htmlContainerProducts = null
  //evalua si paso algun contenedor de productos por defecto
  if(typeof containerProducts == "object"){
    htmlContainerProducts = containerProducts
  }else{
    htmlContainerProducts = document.querySelector(".productos__container");
  }
  //elimino lo que contenga antes de añadir para no tener todos los productos en una sola categoria
  htmlContainerProducts.innerHTML = "";

  //evalua si la categoría esta vacía
  if(categoria.listProducts.length==0){
    htmlContainerProducts.innerHTML ='<img class ="notFound" src="./assets/404.jpg" alt="">'
    htmlContainerProducts.classList.add('productos__container--hidden')
  }

  //recorro cada producto dentro de la categoria y lo añado en el contenedor html
  categoria.listProducts.forEach((producto) => {
    htmlContainerProducts.classList.remove('productos__container--hidden')
    let product = renderProduct(producto);
    htmlContainerProducts.appendChild(product);
  });
}

export { listProducts,renderProducts};

