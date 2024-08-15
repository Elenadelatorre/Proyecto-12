import './FilterControls.css'
const FilterControls = ({ setSearchTerm, setSortOrder }) => {
  return (
    <div className='filter-controls'>
      <input
        type='text'
        placeholder='¿Qué estás buscando?'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value=''>Ordenar por</option>
        <option value='price-asc'>Precio de menor a mayor</option>
        <option value='price-desc'>Precio de mayor a menor</option>
        <option value='rating-asc'>Más valorados</option>
        <option value='rating-desc'>Menos valorados</option>
      </select>
    </div>
  );
};

export default FilterControls;
