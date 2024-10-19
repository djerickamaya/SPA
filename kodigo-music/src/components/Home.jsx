import Player from "./Player";
function Home() {
    const albums = [
        { id: 1, title: 'Física y Química', artist: 'Joaquín Sabina 1', cover: 'https://rocksesion.com/wp-content/uploads/2013/02/33-joaquin-sabina-fisica-y-quimica.jpg' },
        { id: 2, title: 'Abre', artist: 'Fito Paez', cover: 'https://i.scdn.co/image/ab67616d00001e02857721cf350a47783073a9d7' },
        { id: 3, title: 'Alta suciedad', artist: 'Andres Calamaro', cover: 'https://i.scdn.co/image/ab67616d00001e02e4b8ec3d2ffe1f77c7185d48' },
        { id: 3, title: 'Romances', artist: 'Luis Miguel', cover: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Romances_Luis_Miguel.jpg' },
        { id: 3, title: 'Thriller', artist: 'Michael Jackson', cover: 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png' },
        { id: 3, title: 'Pies descalzos', artist: 'Shakira', cover: 'https://i.discogs.com/hKAKQ4MKu6UVDphAcq1X2tjUaiLfqidagU1xtufsTuI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMzU4/NDctMTQxMzEyOTQw/Mi01NTI5LmpwZWc.jpeg' },
    ];

    return (
        <>
            <br />
            <div className="player-margins">
                <Player />
            </div>

            <div className="container">
                <div className="intro-text">
                    <br /><br />
                    <h1>Bienvenido a Kodigo Music</h1>
                    <br />
                    <p>Explora nuestra biblioteca de música.</p>
                    <br /><br />
                </div>
                <div className="album-grid">
                    {albums.map((album) => (
                        <div key={album.id} className="album-card">
                            <img src={album.cover} alt={`${album.title} cover`} />
                            <h2>{album.title}</h2>
                            <p>{album.artist}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
