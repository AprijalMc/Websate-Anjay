// Daftar film (judul, thumbnail, dan link YouTube)
const films = [
    {
        title: "Petaka Gunung Gede", ////////////////////////////////////////////
        thumb: "img/Poster_Petaka_Gunung_Gede.jpg",
        youtube: "https://www.youtube.com/embed/WPgXDmiDuMc?si=IBeYyNuwNFiLeOYC",
        genre: "Horor"
    },
    {
        title: "Waktu Maghrib",
        thumb: "img/Poster_Waktu_Maghrib.jpg",
        youtube: "https://www.youtube.com/embed/RbQui-4kKXg?si=sWCDj8MzODVA0Swo",
        genre: "Drama"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00",
        genre: "Action"
    },
    {
        title: "Never Back Down: No Surrender",
        thumb: "img/Never_Back_Down_No_Surrender.jpg",
        youtube: "https://www.youtube.com/embed/mwbdQKiHGfE?si=y-enS_8x0-mklQED",
        genre: "Komedi"
    },
    {
        title: "DILAN 1990",
        thumb: "img/250px-Dilan_1990_(poster).jpg",
        youtube: "https://www.youtube.com/embed/QDzP6qsZHQo?si=_KIXZsa76wMjJ5Cc",
        genre: "Action"
    },
    {
        title: "PERTARUHAN",
        thumb: "img/At_Stake_(Pertaruhan).jpg",
        youtube: "https://www.youtube.com/embed/HGtqZEZaUsk?si=sD5ly5QvzcTaHSwc",
        genre: "Action"
    },
    //////////////////////////////////////////////////////////////////////////////
    {
        title: "Total Chaos (2017)",
        thumb: "img/Total_Chaos_film_poster.jpg",
        youtube: "https://www.youtube.com/embed/sgeKNNn2Raw?si=UseYevmNHpi741AO",
        genre: "Action"
    },
    {
        title: "Ejen Ali Movie 2",
        thumb: "img/ejen-ali-the-movie-2.jpg",
        youtube: "https://www.youtube.com/embed/BwPbN_hmPyM?si=hf9Q6zTHXz8S5qPD",
        genre: "Action"
    },
    {
        title: "Jade Dynasty",
        thumb: "img/Jade_Dynasty_Poster.jpg",
        youtube: "https://www.youtube.com/embed/TPjeTKknQ0w?si=LMV2hjhIKCHFshAb",
        genre: "Action"
    },
    {
        title: "Qi Tian Da Sheng 2023",
        thumb: "img/images.jpg",
        youtube: "https://www.youtube.com/embed/TmuauC0bCPA?si=cOL1rTYbZZzVcKUd",
        genre: "Action"
    },
    {
        title: "Faster",
        thumb: "img/Faster2010Poster.jpg",
        youtube: "https://www.youtube.com/embed/D3oO_9S6TVM?si=xatJF_m8xltVPJPi",
        genre: "Action"
    },
    {
        title: "RUMAH TETEH STORY OF HELENA 2025",
        thumb: "img/images (1).jpg",
        youtube: "https://www.youtube.com/embed/MlUbvV8zy6M?si=X0i7N3eyZky3g-Ma",
        genre: "Action"
    },
    //////////////////////////////////////////////////////////////////////////////
    {
        title: "Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu",
        thumb: "img/139131.jpg",
        youtube: "https://www.youtube.com/embed/HrJcGXs8PZA?si=6_LEFGlRnZS-4BVR",
        genre: "Action"
    },
    {
        title: "Noblesse",
        thumb: "img/111646.jpg",
        youtube: "https://www.youtube.com/embed/RM-PR6G4cv0?si=9RV3kkoBXWC1kyM5",
        genre: "Action"
    },
    {
        title: "Slay The Gods",
        thumb: "img/144274.jpg",
        youtube: "https://www.youtube.com/embed/bxNlZZSy0GA?si=tu61FsD_AlsNYwDt",
        genre: "Action"
    },
    {
        title: "The Demon Hunter",
        thumb: "img/images (2).jpg",
        youtube: "https://www.youtube.com/embed/wW77ux2Lebo?si=oZs88w0pynM9gRAt",
        genre: "Action"
    },
    {
        title: "The Bad Guys: Reign of Chaos",
        thumb: "img/The_Bad_Guys_-_Reign_of_Chaos.jpg",
        youtube: "https://www.youtube.com/embed/1_Ot2eTcoU8?si=FJ5jxnDGMceJpCIm",
        genre: "Action"
    },
    {
        title: "Lord of the Elves (Age Of The Hobbits)",
        thumb: "img/Clash_of_the_Empires.jpg",
        youtube: "https://www.youtube.com/embed/yn1a61gaLY4?si=DBzfcmK1G5eoIuhy",
        genre: "Action"
    },
    //////////////////////////////////////////////////////////////////////////////
    {
        title: "The Huns",
        thumb: "img/MV5BNzIzODNkZTctMTQxMy00NDdjLTg2NGYtNDBhM2M2NTliNjgzXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
        youtube: "https://www.youtube.com/embed/4gwMlMv5w8A?si=8vrbssMPhxEDhIVt",
        genre: "Action"
    },
    {
        title: "Dark Nemesis (The Dark Knight)",
        thumb: "img/MV5BMzIxNzU4NjkwMV5BMl5BanBnXkFtZTgwNDU4NjM4MDE@._V1_.jpg",
        youtube: "https://www.youtube.com/embed/H8ju04Bx1fE?si=t9-EIPBtUoieipRh",
        genre: "Action"
    },
    {
        title: "Black Storm",
        thumb: "img/v_178255682_m_601_en_m1_260_360.jpg",
        youtube: "https://www.youtube.com/embed//7vksCujNuKs?si=V2vMwCcdi8uIW8od",
        genre: "Action"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00",
        genre: "Action"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00",
        genre: "Action"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00",
        genre: "Action"
    }
    //////////////////////////////////////////////////////////////////////////////
];

const filmList = document.querySelector('.film-list');
const searchInput = document.getElementById('search-film');

function renderFilms(filteredFilms) {
    filmList.innerHTML = '';
    filteredFilms.forEach((film, idx) => {
        const card = document.createElement('div');
        card.className = 'film-card';
        card.innerHTML = `
            <img src="${film.thumb}" alt="${film.title}" class="film-thumb" />
            <div class="film-title">${film.title}</div>
        `;
        card.onclick = () => showFilm(films.indexOf(film));
        filmList.appendChild(card);
    });
}

// Tampilkan semua film saat awal
renderFilms(films);

// Event listener untuk search
searchInput.addEventListener('input', function() {
    const keyword = this.value.toLowerCase();
    const filtered = films.filter(film => film.title.toLowerCase().includes(keyword));
    renderFilms(filtered);
});

function showFilm(idx) {
    const film = films[idx];
    document.body.innerHTML = `
        <header style="background: linear-gradient(90deg, #232526 0%, #414345 100%); box-shadow: 0 2px 12px rgba(0,0,0,0.12); padding: 16px 0 10px 0;">
            <h1 style="color:#fff; text-shadow:0 2px 8px #0005; margin-bottom:8px; font-size:1.5em; font-weight:600; text-align:center; letter-spacing:1px;">${film.title}</h1>
            <div style="display:flex;justify-content:center;">
                <button onclick="location.reload()" style="background:#232323;color:#fff;border:none;border-radius:18px;padding:7px 18px;font-size:1em;cursor:pointer;box-shadow:0 2px 8px #88888833;transition:background 0.2s; font-weight:500;display:flex;align-items:center;gap:6px;">
                    <svg width="16" height="16" style="vertical-align:middle;margin-right:6px;" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    Kembali ke Daftar
                </button>
            </div>
        </header>
        <main style="display:flex;justify-content:center;align-items:center;height:70vh;">
            <iframe width="800" height="450" src="${film.youtube}" frameborder="0" allowfullscreen></iframe>
        </main>
        <footer>
            <p>&copy; 2025 Pri Film</p>
        </footer>
    `;
}

// Hamburger menu logic
const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.querySelector('.nav-list');

hamburgerBtn.addEventListener('click', function() {
    navList.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
});

// Efek salju kecil turun
function createSnow() {
    const canvas = document.createElement('canvas');
    canvas.id = 'snow-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let snowflakes = Array.from({length: 120}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.5,
        d: Math.random() * 0.7 + 0.3
    }));

    function drawSnow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        snowflakes.forEach(f => {
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        });
        ctx.fill();
        updateSnow();
    }

    function updateSnow() {
        snowflakes.forEach(f => {
            f.y += f.d;
            if (f.y > canvas.height) {
                f.x = Math.random() * canvas.width;
                f.y = 0;
            }
        });
    }
    setInterval(drawSnow, 30);
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
createSnow();
