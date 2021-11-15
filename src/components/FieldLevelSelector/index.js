import PropTypes from 'prop-types';
import levelSelectorData from '../../utils/staticDatas/levelData';
import './styles.scss';

const FieldLevelSelector = ({
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
        {levelSelectorData.map((item) => (
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

FieldLevelSelector.propTypes = {
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  changeField: PropTypes.func.isRequired,
};

FieldLevelSelector.defaultProps = {
  type: 'time',
  value: '',
};

export default FieldLevelSelector;
