import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <label>
        <br />
          Find contacts by name <br /><br /> 
          <input type='text' value={value} onChange={onChange}></input>
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;