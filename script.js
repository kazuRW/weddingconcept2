const music = document.getElementById('wedding-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');

function openInvitation() {
    const gateOverlay = document.getElementById('gate-overlay');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('wedding-music');
    const musicBtn = document.getElementById('music-control');
    const musicIcon = document.getElementById('music-icon');

    // Munculkan konten di balik pintu
    mainContent.classList.remove('content-hidden');

    // Jalankan animasi belah pintu
    gateOverlay.classList.add('fade-out');

    // Putar musik
    musicBtn.style.display = 'flex';
    music.play().catch(e => console.log("User interaction required for music."));
    musicIcon.classList.add('music-spin');

    // Hapus gerbang setelah pintu terbuka penuh (1.2 detik)
    setTimeout(() => {
        gateOverlay.style.display = 'none';
    }, 1200); 
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.className = "fas fa-music music-spin";
    } else {
        music.pause();
        musicIcon.className = "fas fa-volume-mute";
    }
}