import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ func }) => {
  const [values, setValues] = useState({ x: 0, y: 0, f: 'N' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    func(Number(values.x), Number(values.y), values.f);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="x">
        Position X:
        <input id="x" type="number" name="x" min="0" max="4" value={values.x} onChange={handleChange} />
      </label>
      <label htmlFor="y">
        Position Y:
        <input id="y" type="number" name="y" min="0" max="4" value={values.y} onChange={handleChange} />
      </label>
      <label htmlFor="direction">
        Direction:
        <select id="direction" name="f" value={values.f} onChange={handleChange}>
          <option value="N">North</option>
          <option value="E">East</option>
          <option value="S">South</option>
          <option value="W">West</option>
        </select>
      </label>
      <input type="submit" value="PLACE" />
    </form>
  );
};
export default Input;

Input.propTypes = {
  func: PropTypes.func,
};

Input.defaultProps = {
  func: null,
};
