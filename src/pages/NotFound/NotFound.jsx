import React from 'react';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Puedes volver a la página principal utilizando el siguiente enlace:</p>
      <a href="/">Ir a la página principal</a>
    </div>
  )
}

export default NotFound
