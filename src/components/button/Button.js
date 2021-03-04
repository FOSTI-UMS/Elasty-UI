import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="py-2 px-4 rounded-md bg-gray-800 text-white" onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;