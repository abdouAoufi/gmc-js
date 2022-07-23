import React from "react"

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className='text-center text-5xl font-bold pt-16'>
          React<span className='text-blue-600'>JS</span>
        </h1>
        <p className='text-center text-lg mt-4'>
          A Javascript library for building user interface
        </p>
      </div>
    );
  }
}

export default Header;
