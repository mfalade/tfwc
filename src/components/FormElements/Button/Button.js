import React from 'react';
import classnames from 'classnames';

const Button = (props) => {
  const buttonClasses = classnames({
    button: true,
    lg: props.size === 'large',
    sm: props.size === 'small',
    md: props.size === 'medium',
    'no-shadow': props.shadow === 'none',
    'btn-light': props.type === 'light',
    'btn-dark': props.type === 'dark',
    transparent: props.type === 'transparent',
    orange: props.type === 'orange',
  });

  return (
    <button className={buttonClasses} onClick={props.onClick} { ...props }>
      { props.text }
    </button>
  );
}

export default Button;