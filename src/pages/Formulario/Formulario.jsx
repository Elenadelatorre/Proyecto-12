import { useRef, useState } from 'react';
import './Formulario.css';
import FormInput from '../../components/Form/FormInput/FormInput';
import { validateFields } from '../../utils/validators';
import SuccessMessage from '../../components/Form/CorrectForm/CorrectForm';
import Instructions from '../../components/Form/Instructions/instructions';
import MobileBrandSelect from '../../components/Form/MobileBrandSelect/MobileBrandSelect';
import TermsCheckbox from '../../components/Form/TermCheckbox/TermCheckbox';

// Componente para crear el formulario:
const Formulario = () => {
  //Crear un 'estado' para controlar el envío:
  const [submitted, setSubmitted] = useState(false);
  //Crear un 'estado' para manejar los errores:
  const [errors, setErrors] = useState({});

  //Crear las referencias:
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPhone = useRef();
  const inputAge = useRef();
  const inputModel = useRef();
  const inputConcurso = useRef();
  const inputTerms = useRef();

  const submit = (e) => {
    e.preventDefault();
    const fields = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      phone: inputPhone.current.value,
      age: inputAge.current.value,
      model: inputModel.current.value,
      concurso: inputConcurso.current.value,
      terms: inputTerms.current.checked
    };

    const newErrors = validateFields(fields);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(fields);
      setSubmitted(true);
    }
  };
  console.log('Soy Formulario y me re-renderizo');

  if (submitted) {
    return <SuccessMessage />;
  }
  return (
    <div className='form-page'>
      <div className='form-wrp'>
        <h2 className='title'>Inscripción al concurso</h2>
        <Instructions />

        <form onSubmit={submit}>
          <FormInput
            label='Nombre Completo:'
            type='text'
            refInput={inputName}
            placeholder='Nombre y apellidos'
            error={errors.name}
          />

          <FormInput
            label='Correo Electrónico:'
            type='email'
            refInput={inputEmail}
            placeholder='correo@ejemplo.com'
            error={errors.email}
          />

          <FormInput
            label='Número de teléfono:'
            type='tel'
            refInput={inputPhone}
            placeholder='1234567890'
            error={errors.phone}
          />

          <FormInput
            label='Fecha de nacimiento:'
            type='date'
            refInput={inputAge}
            error={errors.age}
          />

          <MobileBrandSelect refInput={inputModel} error={errors.model} />

          <FormInput
            label='¿Cómo te enteraste del concurso?'
            type='text'
            refInput={inputConcurso}
            placeholder='Redes sociales, amigos, etc.'
            error={errors.concurso}
          />

          <TermsCheckbox refInput={inputTerms} error={errors.terms} />

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
