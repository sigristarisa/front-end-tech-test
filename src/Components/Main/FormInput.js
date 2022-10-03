const FormInput = ({ name, value, min, type, placeholder }) => {
  return (
    <div>
      {type === "checkbox" ? (
        <div>
          <input id={type} name={name} value={value} type={type} />
          <label HTMLFor={type}>{placeholder}</label>
        </div>
      ) : (
        <input
          name={name}
          value={value}
          type={type}
          min={min}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;
