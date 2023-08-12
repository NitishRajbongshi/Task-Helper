import React from 'react'
import PropTypes  from 'prop-types'
import Button from './Button'

function Header(props) {
    // we can write here the basic JS also
    // let name = 'React'

  return (
    <div className="header">
      <h1>{props.title}</h1>

      {/* Make the button as a component */}
      <Button value="Add" background="blue"/>

      {/* <button className='btn'>Add</button> */}

      {/* if we have to use the inline css */}
      {/* <h1 style={headerStyle}>{props.title}</h1> */}

      {/* Using the variable with one curly bracket */}
      {/* <h1>Hello {name}</h1> */}
    </div>
  )
}

// default props
Header.defaultProps = {
    title: 'Default Header'
}

// define the props types
Header.propTypes = {
    title: PropTypes.string
}

// CSS in JS
// const headerStyle = {
//     'background-color': 'red',
//     'color': 'white'
// }

export default Header
