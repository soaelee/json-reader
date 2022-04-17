import React, { HtmlHTMLAttributes } from 'react';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default React.memo(Button);
