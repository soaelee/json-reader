import React from 'react';
import { useJson } from 'hooks';
import { AccordianItem } from 'components';
import styled from 'styled-components';
import { JsonData } from 'store/features/json';

interface ContentProps {
  json: JsonData;
  upperKey?: string;
}

const Content = (props: ContentProps) => {
  const { curKey } = useJson();
  const { json, upperKey } = props;
  const isMain = !upperKey;

  return (
    <AccordianList
      className={
        isMain ? 'main-list' : curKey.includes(upperKey) ? undefined : 'hidden'
      }
    >
      {Object.keys(json).map((key, index) => (
        <AccordianItem key={index} className="key" keyName={key}>
          {typeof json[key] === 'object' ? (
            <Content json={json[key]} upperKey={key} />
          ) : (
            <ul>
              <AccordianItem
                hidden={!curKey.includes(key)}
                className="value"
                keyName={key}
                value={json[key]}
              />
            </ul>
          )}
        </AccordianItem>
      ))}
    </AccordianList>
  );
};

const AccordianList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export default React.memo(Content);
