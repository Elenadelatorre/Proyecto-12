import './instructions.css';

// Componente que muestra las instrucciones para completar el formulario:
const Instructions = () => {
  return (
    <div>
      <div className='instructions'>
        <p>¡Bienvenido al concurso! Para participar, sigue estos pasos:</p>
        <ol>
          <li>· Ser mayor de edad</li>
          <li>
            · Completa todos los campos del formulario con tu información
            correcta.
          </li>
          <li>
            · Asegúrate de aceptar los términos y condiciones al final del
            formulario.
          </li>
          <li>· Haz clic en "Enviar" para completar tu inscripción.</li>
          <li>
            · Espera nuestro correo de confirmación con los detalles del sorteo.
          </li>
        </ol>
        <p>¡Buena suerte!</p>
      </div>
    </div>
  );
};

export default Instructions;
