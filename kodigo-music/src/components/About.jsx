import Player from './Player';

function About() {
    return (
        <div className="container">
            <section className="history">
                <br />
                <h1>Sobre Nosotros</h1>
                <br />
                <h5>Inspirados por Spotify, Deezer y Apple Music.</h5><br />
                <h2>Historia de la Música</h2><br />
                <p>
                    La música ha sido una parte integral de la humanidad desde tiempos inmemoriales. Desde los tambores y flautas de las antiguas civilizaciones hasta los complejos arreglos orquestales y la música digital de hoy, ha evolucionado constantemente, reflejando la cultura y el espíritu de cada era.
                </p>
                <p>
                    En la antigüedad, la música era utilizada en ceremonias religiosas, rituales y celebraciones. En la Edad Media, surgieron los trovadores y la música sacra, mientras que el Renacimiento trajo consigo una explosión de innovación musical. La música clásica de compositores como Mozart y Beethoven definió el periodo barroco y clásico.
                </p>
                <p>
                    El siglo XX fue testigo de la diversidad musical con la aparición del jazz, el rock, el pop y el hip-hop. La tecnología también jugó un papel crucial, permitiendo nuevas formas de grabar y distribuir música. Hoy en día, plataformas como Spotify, Deezer y Apple Music han revolucionado la manera en que escuchamos y descubrimos música.
                </p>
                <p>
                    En Kodigo Music, nos esforzamos por continuar esta rica tradición, ofreciendo una biblioteca diversa y accesible para todos los amantes de la música.
                </p><br />
            </section>
            <section className="video">
                <h2>Video sobre la Historia de la Música</h2><br /><br />
                <div className="video-container">
                    <iframe
                        width="600"
                        height="415"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="player-margins">
                    <Player />
                </div>
            </section>
        </div>
    );
}

export default About;
