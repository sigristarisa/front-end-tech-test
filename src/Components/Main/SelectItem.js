const SelectItem = ({ label, name, selectItemArr, onChange }) => {
  return (
    <div>
      <select label={label} name={name} onChange={onChange}>
        {selectItemArr.map((selectItem, index) => {
          return index === 0 ? (
            <option value={selectItem} key={index} disabled>
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
