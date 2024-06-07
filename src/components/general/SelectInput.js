import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="select-input">
      <label>{label}Min Date:</label>
      <select className={className} onChange={handleSelect} value={value}>
        {options?.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;
