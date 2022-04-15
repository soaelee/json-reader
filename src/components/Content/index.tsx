import { useJson } from "hooks";
import React from "react";
import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface ContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  json: { [key: string]: any };
  upperKey?: string;
}

const Content = (props: ContentProps) => {
  const { curKey, onSelectKey } = useJson();
  const { json, upperKey } = props;
  const isMain = !upperKey;

  return (
    <List
      className={
        isMain ? "main-list" : curKey.includes(upperKey) ? "show" : "hide"
      }
    >
      {Object.keys(json).map((key, index) => (
        <Item key={index}>
          <p onClick={() => onSelectKey(key)}>{key}</p>
          {typeof json[key] === "object" ? (
            <Content json={json[key]} upperKey={key} />
          ) : (
            <Item className={curKey.includes(key) ? "show" : "hide"}>
              {json[key]}
            </Item>
          )}
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Item = styled.li`
  padding-left: 20px;
`;

export default React.memo(Content);
