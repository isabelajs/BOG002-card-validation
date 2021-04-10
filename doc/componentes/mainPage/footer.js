//componente pie de pagina de la pagina principal
const footer = () => {
  const cFooter = document.createElement("footer");
  cFooter.classList.add("footer");
  const view = `   <div class="footer__icons">
                    <div class="footer__icon-whatsapp icon"></div>
                    <div class="footer__icon-instagram icon"></div>
                    <div class="footer__icon-facebook icon"></div>
                  </div>

                  <div class="footer__text">
                    <p>Términos y condiciones</p>
                    <p>Política de tramientos de datos</p>
                  </div>`;
  cFooter.innerHTML = view;

  return cFooter;
};

export { footer };

