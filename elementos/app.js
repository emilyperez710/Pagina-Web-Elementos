const views = document.querySelectorAll('.view');

function showView(id){
  if(!document.getElementById(id)) id = 'home';
  views.forEach(v => v.classList.toggle('hidden', v.id !== id));
  window.scrollTo(0,0);
}

// portada → detalle
document.querySelectorAll('[data-target]').forEach(card=>{
  card.addEventListener('click', ()=>{
    location.hash = card.dataset.target;
  });
});

// botones "Volver"
document.querySelectorAll('[data-view]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    location.hash = btn.dataset.view;
  });
});

// navegación por hash (#home, #fm, etc.)
function onHashChange(){
  const id = (location.hash || '#home').slice(1);
  showView(id);
}

window.addEventListener('hashchange', onHashChange);
window.addEventListener('DOMContentLoaded', onHashChange);
