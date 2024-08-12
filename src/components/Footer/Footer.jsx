import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>Información de Contacto</h4>
            <p>Dirección: Calle Principal, Ciudad</p>
            <p>Teléfono: +123456789</p>
            <p>Email: info@example.com</p>
          </div>
          <div className='col'>
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/store'>Tienda</a>
              </li>
              <li>
                <a href='/form'>Concurso</a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h4>Síguenos</h4>
            <div className='social-links'>
              <a href='https://facebook.com'>Facebook</a>
              <a href='https://twitter.com'>Twitter</a>
              <a href='https://instagram.com'>Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>&copy; 2024 Elena de la Torre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
