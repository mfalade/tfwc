import React from 'react';
import classnames from 'classnames';

const Button = (props) => {
  const buttonClasses = classnames({
    button: true,
    lg: props.size === 'large',
    sm: props.size === 'small',
    md: props.size === 'medium'
  });

  return (
    <button className={buttonClasses} onClick={props.onClick} { ...props }>
      { props.text }
    </button>
  );
}

export default Button;