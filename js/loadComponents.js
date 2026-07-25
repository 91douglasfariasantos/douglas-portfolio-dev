document.addEventListener("DOMContentLoaded", () => {
  // Carrega o componente de navbar e só inicializa os eventos quando o HTML já estiver na tela
  loadComponent("navbar-container", "./components/navbar.html", initNavbarEvents);
});

/**
 * Carrega um componente HTML assincronamente e injeta no DOM
 * @param {string} containerId - ID do elemento contêiner
 * @param {string} componentPath - Caminho relativo para o arquivo .html
 * @param {Function} callback - Função executada após o HTML ser injetado
 */
async function loadComponent(containerId, componentPath, callback) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`Erro ao carregar o componente ${componentPath}: Status ${response.status}`);
    }

    const htmlText = await response.text();
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = htmlText;
      if (typeof callback === "function") {
        callback();
      }
    }
  } catch (error) {
    console.error("Erro no carregamento do componente:", error);
  }
}

/**
 * Eventos da Navbar (executados estritamente após a renderização do componente)
 */
function initNavbarEvents() {
  const root = document.documentElement;
  const thbtn = document.getElementById("thbtn");
  const suni = document.getElementById("suni");
  const mooni = document.getElementById("mooni");

  // ---------- 1. Alternador de Tema (Claro/Escuro) ----------
  if (thbtn) {
    thbtn.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      root.setAttribute("data-theme", isLight ? "dark" : "light");

      if (suni && mooni) {
        suni.style.display = isLight ? "none" : "inline";
        mooni.style.display = isLight ? "inline" : "none";
      }
    });
  }

  // ---------- 2. Indicador Deslizante & Navegação ----------
  const links = document.querySelectorAll(".nav-link");
  const indicator = document.getElementById("navIndicator");
  const collapseEl = document.getElementById("navCollapse");

  function moveIndicator(el) {
    if (!el || !indicator || window.innerWidth < 992) return; // No mobile o indicador não se move
    indicator.style.width = el.offsetWidth + "px";
    indicator.style.transform = `translateX(${el.offsetLeft - 4}px)`;
  }

  // Eventos nos links da navbar
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      moveIndicator(link);

      // Fecha o menu collapse do Bootstrap no mobile após o clique
      if (collapseEl && collapseEl.classList.contains("show") && typeof bootstrap !== "undefined") {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
    });
  });

  // Posiciona o indicador no link ativo inicial
  const activeLink = document.querySelector(".nav-link.active");
  if (activeLink) {
    moveIndicator(activeLink);
  }

  // Recalcula o indicador ao redimensionar a janela
  window.addEventListener("resize", () => {
    const currentActive = document.querySelector(".nav-link.active");
    if (currentActive) {
      moveIndicator(currentActive);
    }
  });
}