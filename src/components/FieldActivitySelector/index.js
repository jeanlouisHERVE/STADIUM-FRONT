import PropTypes from 'prop-types';

import './styles.scss';

const FieldActivitySelector = ({
  data,
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;

    changeField(name, inputValue);
  };

  console.log(data);

  return (
    <div className="fieldSelector">
      <select
        className="select"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      >
        <option value="">--Please choose an option--</option>
        { data && data.map((item) => (
          <option
            key={item.id}
            value={item.id}
          >
            {item.name}
          </option>
        ))};
      </select>
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
    </div>
  );
};

FieldActivitySelector.propTypes = {
  data: PropTypes.array.isRequired,
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  changeField: PropTypes.func.isRequired,
};

FieldActivitySelector.defaultProps = {
  type: 'text',
  value: '',
};

export default FieldActivitySelector;
