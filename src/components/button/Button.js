import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../themes';

const Button = ({
  tag, layout, variant, text, onClick, ...args
}) => {
  const Tag = tag;

  const baseStyles = styles.button.base;
  const layoutStyles = styles.button[layout];

  const baseTheme = layoutStyles.base;
  const themeStyles = layoutStyles[variant].base;

  return (
    <Tag className={classNames(baseStyles, baseTheme, themeStyles)} onClick={onClick} {...args}>
      {text}
    </Tag>
  );
};

Button.propTypes = {
  tag: PropTypes.string,
  layout: PropTypes.oneOf(['fill', 'outline']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  text: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  tag: 'button',
  layout: 'fill',
  variant: 'primary',
  onClick: () => {},
};

export default Button;
