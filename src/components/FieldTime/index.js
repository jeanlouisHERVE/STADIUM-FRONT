import PropTypes from 'prop-types';

import './styles.scss';

/**
 * A field to be used inside a form : label and input
 */
const FieldTime = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
  hidden,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    /*
      - on crée une variable inputValue qui contient event.target.value
      - on crée une variable name qui contient event.target.name
    */

    changeField(name, inputValue);
  };

  if (hidden === true) {
    return (
      <div className="field" hidden>
        <input
          className="input"
          id={identifier}
          placeholder={placeholder}
          name={identifier}
          type={type}
          value={value}
          onChange={handleChange}
        />
        <label
          className="label"
          htmlFor={identifier}
        >
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className="field">
      <input
        className="input"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
    </div>
  );
};

FieldTime.propTypes = {
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  hidden: PropTypes.bool,
  changeField: PropTypes.func.isRequired,
};

FieldTime.defaultProps = {
  type: 'time',
  value: '',
  hidden: false,
};

export default FieldTime;
