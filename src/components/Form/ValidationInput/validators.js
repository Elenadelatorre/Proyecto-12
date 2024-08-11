// validators.js
export const validateFields = (fields) => {
  const errors = {};

  if (!fields.name.trim()) {
    errors.name = 'Por favor, introduce tu nombre completo.';
  }

  if (!fields.email.trim()) {
    errors.email = 'Por favor, introduce tu correo electrónico.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email)) {
    errors.email = 'Por favor, introduce un correo electrónico válido.';
  }

  if (!fields.phone.trim()) {
    errors.phone = 'Por favor, introduce tu número de teléfono.';
  } else if (!/^\d{9}$/.test(fields.phone)) {
    errors.phone = 'El número de teléfono debe tener 9 dígitos.';
  }

  if (!fields.age.trim()) {
    errors.age = 'Por favor, introduce tu fecha de nacimiento.';
  } else {
    const birthYear = new Date(fields.age).getFullYear();
    const currentYear = new Date().getFullYear();

    if (currentYear - birthYear < 18) {
      errors.age = 'Debes tener al menos 18 años para participar.';
    }
  }

  if (!fields.model.trim()) {
    errors.model = 'Por favor, selecciona una marca de móviles.';
  }

  if (!fields.concurso.trim()) {
    errors.concurso = 'Por favor, dinos cómo te enteraste del concurso.';
  }

  if (!fields.terms) {
    errors.terms = 'Debes aceptar los términos y condiciones.';
  }

  return errors;
};
