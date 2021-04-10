//componente search
const search = () => {
  
  //creo el componente search
  const cSearch = document.createElement("div");
  cSearch.classList.add("c-buscador");
  const view = `  <div class="buscador__icon-lupa"></div>
                  <input type="text" value="" placeholder="Buscar" class="buscador__text">`;
  cSearch.insertAdjacentHTML("afterbegin", view);


  //TODO debo hacer la función que busque el producto
  const buttonSearch = cSearch.querySelector(".buscador__icon-lupa");
  buttonSearch.addEventListener("click", () => {
    console.log("buscando");
  });

  return cSearch;
};

export { search };



