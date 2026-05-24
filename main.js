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
     6. EKSEKUSI OTOMATIS SAAT HALAMAN SELESAI DIMUAT
     =================================================== */
  document.addEventListener("DOMContentLoaded", function() {
    // Pastikan fungsi panah berjalan setelah semua elemen HTML dibaca browser
    hideArrowsOnDesktop();
  });
  
  // Menjalankan fungsi resize otomatis saat layar ditarik/diubah
  window.addEventListener('resize', hideArrowsOnDesktop);
  
  // Memastikan saat web pertama kali dibuka, periode 2025/2026 langsung aktif tampil
document.addEventListener("DOMContentLoaded", function() {
  // Set value dropdown secara default ke s1 (2025/2026)
  const selectStruktur = document.getElementById("pilihStruktur");
  if (selectStruktur) {
      selectStruktur.value = "s1"; 
      showStruktur(); // Jalankan fungsi untuk memunculkan datanya
  }
});
  
  
