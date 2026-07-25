 // ---------- Tema claro/escuro ----------
  const root  = document.documentElement;
  const suni  = document.getElementById('suni');
  const mooni = document.getElementById('mooni');
  document.getElementById('thbtn').addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    root.setAttribute('data-theme', isLight ? 'dark' : 'light');
    suni.style.display  = isLight ? 'none' : 'inline';
    mooni.style.display = isLight ? 'inline' : 'none';
  });
 
  // ---------- Indicador deslizante (desktop) ----------
  const links = document.querySelectorAll('.nav-link');
  const indicator = document.getElementById('navIndicator');
  const collapseEl = document.getElementById('navCollapse');
 
  function moveIndicator(el){
    if (window.innerWidth < 992) return; // no mobile o indicador some
    indicator.style.width = el.offsetWidth + 'px';
    indicator.style.transform = `translateX(${el.offsetLeft - 4}px)`;
  }
 
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      moveIndicator(link);
      // fecha o collapse no mobile ao clicar num link
      if (collapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
    });
  });
 
  window.addEventListener('load', () => moveIndicator(document.querySelector('.nav-link.active')));
  window.addEventListener('resize', () => moveIndicator(document.querySelector('.nav-link.active')));