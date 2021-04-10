const categoriesSection = ()=>{

    const view = `
        <div class="c-carrousel__title">Nuestras Categorías</div>

        <div class="c-carrousel__products">
          
        </div>`

    const categories = document.createElement("section")
    categories.classList.add("c-carrousel")
    categories.innerHTML = view
    
    

    let carrousel = categories.querySelector(".c-carrousel__products")
    console.log(carrousel)

    return categories

}


export{categoriesSection}



// <section class="c-carrousel">



//         <div class="c-carrousel__title">Nuestras Categorías</div>

//         <div class="c-carrousel__products">

//           <div class="c-categoria">
//             <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
//             <div class="c-categoria__title">Alimento seco</div>
//           </div>

//           <div class="c-categoria">
//             <img class="c-categoria__img" src="./assets/categoria__img-purina.png" alt="">
//             <div class="c-categoria__title">Alimento seco</div>
//           </div>
         
//         </div>


// </section>