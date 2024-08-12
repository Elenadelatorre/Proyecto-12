// Componente para crear los campos de los formularios:
const FormInput = ({ label, type, refInput, placeholder, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        ref={refInput}
        placeholder={placeholder}
        style={{
          borderColor: error && 'red',
          outline: error && 'red',
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FormInput;
