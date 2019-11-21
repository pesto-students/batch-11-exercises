import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/ColorList.css';

const ColorList = (props) => {
  const colorLinks = props.colors.map((color) => {
    return (
      <li key={color.hex}>
        <NavLink
          to={{
            pathname: `/colors:${color.name}`,
          }}
        >
          {color.name}
        </NavLink>
      </li>
    );
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Welcome to the Colorful Router.</h1>
        <h1>
          <NavLink to='/colors/new'>Add a color</NavLink>
        </h1>
      </header>
      <div className='App-intro'>
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ColorList;
