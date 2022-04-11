import React, { HtmlHTMLAttributes } from "react";

interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children, ...rest } = props;
  return (
    <div className="container" {...rest}>
      <header className="header">JSON READER</header>
      <div className="contents">{children}</div>
    </div>
  );
};

export default React.memo(Layout);
