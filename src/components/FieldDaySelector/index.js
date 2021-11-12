import PropTypes from 'prop-types';

import './styles.scss';

/**
 * A field to be used inside a form : label and input
 */
const FieldDaySelector = ({
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
    /*
      - on crée une variable inputValue qui contient event.target.value
      - on crée une variable name qui contient event.target.name
    */

    changeField(name, inputValue);
  };

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
        {data.map((item) => (
          <option key={item.id} value={item.value}>{item.name}</option>
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

FieldDaySelector.propTypes = {
  data: PropTypes.array.isRequired,
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  hidden: PropTypes.bool,
  changeField: PropTypes.func.isRequired,
};

FieldDaySelector.defaultProps = {
  type: 'time',
  value: '',
  hidden: false,
};

export default FieldDaySelector;
