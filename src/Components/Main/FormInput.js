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
    <div>
      {type === "checkbox" ? (
        <div>
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
        />
      )}
    </div>
  );
};

export default FormInput;
