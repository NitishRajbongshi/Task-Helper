import React from "react";
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: props.background }}>
        {props.value}
      </button>
    </div>
  );
}

// set default button color
Button.defaultProps = {
    value: "Add Task",
    background: 'green'
}

// set the props types
Button.propTypes = {
    value: PropTypes.string,
    background: PropTypes.string
}

export default Button;
