const SelectItem = ({ label, name, value, selectItemArr, onChange }) => {
  return (
    <div className='form-input_container'>
      <select
        className='select-item-default'
        label={label}
        name={name}
        onChange={onChange}
        value={value}
      >
        {selectItemArr.map((selectItem, index) => {
          return index === 0 ? (
            <option value='' key={index} disabled={true}>
              {selectItem}
            </option>
          ) : (
            <option value={selectItem} key={index}>
              {selectItem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectItem;
