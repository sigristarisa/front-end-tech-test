const SelectItem = ({ label, name, selectItemArr }) => {
  return (
    <div>
      <select label={label} name={name}>
        {selectItemArr.map((selectItem, index) => {
          return index === 0 ? (
            <option value={selectItem} disabled selected>
              {selectItem}
            </option>
          ) : (
            <option value={selectItem}>{selectItem}</option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectItem;
