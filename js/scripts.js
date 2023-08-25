// script.js
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
  
    // Função para verificar a posição da página e mostrar/ocultar o ícone
    function toggleScrollToTop() {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    }
  
    // Adiciona o evento de rolagem e executa a função de alternância
    window.addEventListener("scroll", toggleScrollToTop);
  
    // Adiciona o evento de clique para rolar suavemente até o topo
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Executa a função de alternância no carregamento inicial da página
    toggleScrollToTop();
  });
  