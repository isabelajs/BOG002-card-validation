import {bestProducts} from "../../database/data.js"

const featuredProducts = ()=>{
    const view = `
    <div class="c-carrousel__title">Nuestros productos más destacados</div>
    <div class="c-carrousel__items"></div>
    `
    const cfeaturedProducts = document.createElement("section");
    cfeaturedProducts.classList.add("c-carrousel");
    cfeaturedProducts.insertAdjacentHTML("afterbegin",view)

    const productItems = cfeaturedProducts.querySelector(".c-carrousel__items")

    bestProducts.forEach(element=>{
        let visualProduct = element.producto

        if (visualProduct){
            
            let cProduct = document.createElement("div")
            cProduct.classList.add("c-categoria")
    
            const viewCProduct = ` 
                <img class="c-categoria__img" src="${visualProduct.imgUrl}" alt="">
                <div class="c-categoria__title">${visualProduct.name}</div>`
            
            cProduct.insertAdjacentHTML("afterbegin",viewCProduct)
            productItems.insertAdjacentElement("afterbegin",cProduct)
        }
       

    })

    
    return cfeaturedProducts

}

export{featuredProducts}

{/* <section class="c-carrousel">
        <div class="c-carrousel__title">Nuestras Categorías</div>
        <div class="c-carrousel__items">
        </div>
      </section> 

<div class="c-categoria">
    <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
    <div class="c-categoria__title">Alimento seco</div>
</div>  */}
