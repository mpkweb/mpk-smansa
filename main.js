/* ===================================================
   1. FUNGSI NAVIGASI & MENU
   =================================================== */
   function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  
  /* ===================================================
     2. FUNGSI FILTER PERIODE (KEGIATAN & STRUKTUR)
     =================================================== */
  function showPeriode(id) {
    const section = document.getElementById("kegiatan");
    section.querySelectorAll(".periode").forEach(el => {
      el.classList.remove("aktif");
    });
    section.querySelector("#" + id).classList.add("aktif");
  }
  
  function showStruktur() {
    const selected = document.getElementById("pilihStruktur").value;
    document.querySelectorAll(".struktur-periode").forEach(el => {
      el.classList.remove("aktif");
    });
    if (selected) {
      document.getElementById(selected).classList.add("aktif");
    }
  }
  
  /* ===================================================
     3. FUNGSI SLIDER PROFIL MPK
     =================================================== */
  let index = 0;
  
  function nextSlide() {
    const total = document.querySelectorAll(".profil-card").length;
    if (index < total - 1) {
      index++;
    }
    console.log("NEXT:", index);
    updateSlide();
  }
  
  function prevSlide() {
    if (index > 0) {
      index--;
    }
    console.log("PREV:", index);
    updateSlide();
  }
  
  function updateSlide() {
    const slider = document.querySelector(".profil-grid");
    if (slider) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
  }
  
  /* ===================================================
     4. FUNGSI RESPONSIVE TOMBOL PANAH (ARROWS)
     =================================================== */
  function hideArrowsOnDesktop() {
    const arrows = document.querySelectorAll('.arrow');
    if (window.innerWidth > 768) {
      arrows.forEach(arrow => {
        arrow.style.display = 'none';
      });
    } else {
      arrows.forEach(arrow => {
        arrow.style.display = 'flex'; 
      });
    }
  }

  /* ===================================================
     6. EKSEKUSI OTOMATIS HALAMAN SELESAI DIMUAT
     =================================================== */
  document.addEventListener("DOMContentLoaded", function() {
    
    hideArrowsOnDesktop();
  });
  
 
  window.addEventListener('resize', hideArrowsOnDesktop);
  
 
document.addEventListener("DOMContentLoaded", function() {
  
  const selectStruktur = document.getElementById("pilihStruktur");
  if (selectStruktur) {
      selectStruktur.value = "s1"; 
      showStruktur(); 
  }
});
  
  
