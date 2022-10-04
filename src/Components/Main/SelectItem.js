const SelectItem = ({ label, name, selectItemArr, onChange }) => {
  return (
    <div>
      <select label={label} name={name} onChange={onChange} value=''>
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
