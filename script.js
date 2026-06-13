// Ambil elemen HTML yang dibutuhkan
const music = document.getElementById('wedding-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');

function openInvitation() {
    const gateOverlay = document.getElementById('gate-overlay');
    const mainContent = document.getElementById('main-content');

    // 1. Hilangkan gerbang pembuka
    gateOverlay.classList.add('fade-out');

    // 2. Munculkan konten utama undangan
    mainContent.classList.remove('content-hidden');

    // 3. Tampilkan tombol musik melayang & otomatis putar lagunya
    musicBtn.style.display = 'flex';
    music.play().catch(error => {
        console.log("Autoplay dicegah oleh browser, musik akan menyala setelah interaksi berikutnya.");
    });
    
    // Berikan efek berputar pada ikon musik saat aktif
    musicIcon.classList.add('music-spin');

    // 4. Singkirkan elemen gerbang setelah transisi selesai
    setTimeout(() => {
        gateOverlay.style.display = 'none';
    }, 500);
}

// Fungsi tombol untuk Mematikan atau Menyalakan lagu secara manual
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.classList.add('music-spin');
        musicIcon.className = "fas fa-music music-spin"; // Ikon tangga nada
    } else {
        music.pause();
        musicIcon.classList.remove('music-spin');
        musicIcon.className = "fas fa-volume-mute"; // Berubah jadi ikon mute jika dimatikan
    }
}