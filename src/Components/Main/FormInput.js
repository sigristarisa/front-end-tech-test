const FormInput = ({
  name,
  value,
  min,
  type,
  placeholder,
  checked,
  onChange,
}) => {
  return (
    <div className='form-input_container'>
      {type === "checkbox" ? (
        <div className='checkbox_container two-grid-columns_extend-two align-items_center'>
          <input
            id={type}
            name={name}
            type={type}
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={type}>{placeholder}</label>
        </div>
      ) : (
        <input
          name={name}
          value={value}
          type={type}
          min={min}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      )}
    </div>
  );
};

export default FormInput;
