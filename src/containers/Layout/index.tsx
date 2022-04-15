import React, { HtmlHTMLAttributes } from 'react';
import Header from '../Header';

interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children, ...rest } = props;
  return (
    <div className="main" {...rest}>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default React.memo(Layout);
