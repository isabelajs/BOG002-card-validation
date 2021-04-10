import {productCategories} from './main/productCategories.js'
import {listProducts} from './main/listProducts.js'
import {featuredProducts} from './main/featuredProducts.js'

//creo el componente main e inserto la demás información
const main = ()=>{
    const mainComponente = document.createElement('main')
    mainComponente.classList.add('main');
    
    mainComponente.appendChild(productCategories())    
    mainComponente.appendChild(listProducts())
    mainComponente.appendChild(featuredProducts())
    return mainComponente
}

export {main}