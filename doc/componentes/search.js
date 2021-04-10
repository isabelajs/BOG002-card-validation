const buscador = ()=>{

    const view = `
    <div class= "buscador__text">Buscar</div>
    <div class= "buscador__icon-lupa"></div>`

    const search = document.createElement('div')
    search.classList.add("c-buscador")
    search.innerHTML = view

    return search
}

export {buscador}
