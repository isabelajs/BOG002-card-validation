import { bestProducts } from "../../../database/data.js";

//componente categoria de productos más vendidos
const featuredProducts = () => {

  //creo el componente productos destacados
  const view = `    <div class="c-carrousel__title">Nuestros productos más destacados</div>
                    <div class="c-carrousel__items c-scroll"></div>`;

  const cfeaturedProducts = document.createElement("section");
  cfeaturedProducts.classList.add("c-carrousel");
  cfeaturedProducts.insertAdjacentHTML("afterbegin", view);

  //agrego cada uno de los productos en la categoria,segun la base de datos
  const productItems = cfeaturedProducts.querySelector(".c-carrousel__items");
  bestProducts.forEach((element) => {
    let visualProduct = element.producto;
    if (visualProduct) {
      let cProduct = document.createElement("div");
      cProduct.classList.add("c-categoria");

      const viewCProduct = `  <img class="c-categoria__img" src="${visualProduct.imgUrl}" alt="">
                                    <div class="c-categoria__title">${visualProduct.name}</div>`;

      cProduct.insertAdjacentHTML("afterbegin", viewCProduct);
      productItems.insertAdjacentElement("afterbegin", cProduct);
    }
  });

  return cfeaturedProducts;
};

export { featuredProducts };

//TODO buscar como se hace un loading para el momento de inyectar los productos
{
  /* <section class="c-carrousel">
        <div class="c-carrousel__title">Nuestras Categorías</div>
        <div class="c-carrousel__items">
        </div>
      </section> 

<div class="c-categoria">
    <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
    <div class="c-categoria__title">Alimento seco</div>
</div>  */
}
