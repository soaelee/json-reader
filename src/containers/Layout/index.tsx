import React, { HtmlHTMLAttributes } from "react";

interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const {
    title = `JSON-Reader ${props.title ?? ""}`,
    children,
    ...rest
  } = props;
  return (
    <div className="container" {...rest}>
      <header className="header">{title}</header>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Layout;
