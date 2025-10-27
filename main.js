
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll(".reveal");

  function animateReveal() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", animateReveal);
  animateReveal(); // pour les éléments déjà visibles au chargement
});


const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const defaultSrc = videoFrame.src;

    videoModal.addEventListener('hidden.bs.modal', function () {
      // stop video by resetting src
      videoFrame.src = '';
      setTimeout(() => videoFrame.src = defaultSrc, 300);
    });



  const filterButtons = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Retirer l'état "active"
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      products.forEach(product => {
        if (filter === 'all' || product.dataset.category === filter) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });

 
  // Récupère le bouton
  const btn = document.getElementById("btnNosProduits");

  // Ajoute un effet au clic
  btn.addEventListener("click", () => {
    alert("Bienvenue dans notre section Nos Produits ! 🎉");
  });

  // Change la couleur quand on survole
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#450063"; // bordeaux foncé
    btn.style.color = "#fff";
    btn.style.transform = "scale(1.05)";
  });

  // Reviens à l'état normal quand on sort le curseur
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#fff"; // noir
    btn.style.color = "#450063"; // bordeaux clair
    btn.style.transform = "scale(1)";
  });


   // Bouton pour remonter en haut
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Affiche le bouton seulement si on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "inline-block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Action du clic
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Petit effet glow au hover
  scrollBtn.addEventListener("mouseover", () => {
    scrollBtn.style.boxShadow = "0 0 10px #b22222, 0 0 20px #800000";
  });

  scrollBtn.addEventListener("mouseout", () => {
    scrollBtn.style.boxShadow = "none";
  });

 