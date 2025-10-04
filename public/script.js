// Daftar film (judul, thumbnail, dan link YouTube)
const films = [
    {
        title: "Petaka Gunung Gede",
        thumb: "img/Poster_Petaka_Gunung_Gede.jpg",
        youtube: "https://www.youtube.com/embed/WPgXDmiDuMc?si=IBeYyNuwNFiLeOYC"
    },
    {
        title: "Waktu Maghrib",
        thumb: "img/Poster_Waktu_Maghrib.jpg",
        youtube: "https://www.youtube.com/embed/RbQui-4kKXg?si=sWCDj8MzODVA0Swo"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "1",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
    {
        title: "SHADOW FIGHT",
        thumb: "img/bebek ayam.jpg",
        youtube: "https://www.youtube.com/embed/OyD4elCwn_4?si=G2DapQuvvGB4Wr00"
    },
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
        card.onclick = () => showFilm(idx);
        filmList.appendChild(card);
    });
}

renderFilms(films);

searchInput.addEventListener('input', function() {
    const keyword = this.value.toLowerCase();
    const filtered = films.filter(film => film.title.toLowerCase().includes(keyword));
    renderFilms(filtered);
});

function showFilm(idx) {
    const film = films[idx];
    document.body.innerHTML = `
        <header>
            <h1>${film.title}</h1>
            <button onclick="location.reload()" style="margin:10px 0;padding:8px 16px;">Kembali ke Daftar</button>
        </header>
        <main style="display:flex;justify-content:center;align-items:center;height:70vh;">
            <iframe width="800" height="450" src="${film.youtube}" frameborder="0" allowfullscreen></iframe>
        </main>
        <footer>
            <p>&copy; 2025 FilemOrBioskop</p>
        </footer>
    `;
}

// Efek salju
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
    let snowflakes = Array.from({length: 80}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() * 1 + 0.5
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
