import './Home.css'; 

const Home = () => {
  return (
    <div className='home-container'>
      <div className='section concurso'>
        <h1>Participa en el Concurso</h1>
        <p>
          Participa en nuestro emocionante concurso y gana premios increíbles.
          ¡No te lo pierdas!
        </p>
        <img
          src='/assets/concurso-movil.jpg'
          alt='Concurso'
          className='concurso-image'
        />
        <button
          onClick={() => (window.location.href = '/form')}
          className='cta-button'
        >
          Inscríbete
        </button>
      </div>

      <div className='section store'>
        <h1>Explora nuestra tienda</h1>
        <p>Encuentra productos exclusivos y ofertas especiales solo para ti.</p>
        <img
          src='/assets/store-movil.jpg'
          alt='Tienda'
          className='store-image'
        />
        <button
          onClick={() => (window.location.href = '/store')}
          className='cta-button'
        >
          Visita la Tienda
        </button>
      </div>
    </div>
  );
};

export default Home;
