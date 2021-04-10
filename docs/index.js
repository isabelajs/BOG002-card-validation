import {header} from './componentes/mainPage/header.js';
import {footer} from './componentes/mainPage/footer.js';
import {main} from './componentes/mainPage/main.js';
import {shoopingCart} from './componentes/mainPage/shoopingCart/shoopingCart.js';
import {search } from './componentes/mainPage/search.js';


document.body.appendChild(header())
document.body.appendChild(search())
document.body.appendChild(main())
document.body.appendChild(shoopingCart())
document.body.appendChild(footer())



