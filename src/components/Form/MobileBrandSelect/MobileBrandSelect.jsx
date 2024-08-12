import React from 'react';
import { mobileBrands } from '../../../utils/mobileBrands';


const MobileBrandSelect = ({ refInput, error }) => (
  <div>
    <label>¿Qué marca de móviles y smartphones te interesa más?:</label>
    <select
      ref={refInput}
      style={{
        outline: error && 'red',
        borderColor: error && 'red'
      }}
    >
      <option value=''>Selecciona una marca</option>
      {mobileBrands.map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
);

export default MobileBrandSelect;
