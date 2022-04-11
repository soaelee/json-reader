import React, { HtmlHTMLAttributes } from "react";

interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isEmpty: boolean;
}

const Layout = (props: LayoutProps) => {
  const {
    title = `JSON-Reader ${props.title ?? ""}`,
    children,
    isEmpty,
    ...rest
  } = props;
  return (
    <div className="container" {...rest}>
      <header className="header">{title}</header>
      <article className="contents">
        {isEmpty ? <EmptyContents /> : children}
      </article>
    </div>
  );
};

export default Layout;

const EmptyContents = () => {
  return <div className="empty">파일을 첨부해주세요.</div>;
};
