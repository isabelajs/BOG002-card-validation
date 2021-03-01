import {kanu} from "../../database/data.js";
import {renderProducts} from "./listProducts.js"

//creo el componente categorias de productos
const productCategories = ()=>{

    const categories = document.createElement("section")
    categories.classList.add("c-carrousel")

    const view = `<div class="c-carrousel__title">Nuestras Categorías</div>
                  <div class="c-carrousel__items c-scroll"></div>`

    categories.insertAdjacentHTML("afterbegin",view)

    const categoriesCarrousel = categories.querySelector(".c-carrousel__items")
    
    kanu.categories.forEach(categoria=>{
      let cCategory = document.createElement("div")
      cCategory.classList.add("c-categoria")
    
      const viewCategory = `<img class="c-categoria__img" src="${categoria.imgUrl}" alt="">
                            <div class="c-categoria__title">${categoria.name}</div>`
      cCategory.insertAdjacentHTML("afterbegin", viewCategory) 

      categoriesCarrousel.appendChild(cCategory)

      cCategory.addEventListener("click", ()=>{renderProducts(categoria)})
        
    })


    return categories
}


export {productCategories}



/* <section class="c-carrousel">
        <div class="c-carrousel__title">Nuestras Categorías</div>
        <div class="c-carrousel__items">
          <div class="c-categoria">
            <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
            <div class="c-categoria__title">Alimento seco</div>
          </div>

        </div>
      </section> 

<div class="c-categoria">
    <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
    <div class="c-categoria__title">Alimento seco</div>
</div>  */


//TODO hacer función deslizar