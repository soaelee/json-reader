import React from "react";
import { HtmlHTMLAttributes } from "react";
import { TState } from "store/features/json";

interface ContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  json: TState;
}

const Content = (props: ContentProps) => {
  const { json } = props;
  return (
    <div>
      <ul>
        {Object.keys(json).map((key, index) => {
          return (
            <li key={index}>
              {key} : {json[key]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default React.memo(Content);
