import { useJson } from 'hooks';
import React from 'react';
import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import IconArrow from 'assets/images/icons/arrow.svg';
import { SECONDARY_LIGHT_GRAY } from 'libs/constants';

interface ContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  json: { [key: string]: any };
  upperKey?: string;
}

const Content = (props: ContentProps) => {
  const { curKey, onSelectKey } = useJson();
  const { json, upperKey } = props;
  const isMain = !upperKey;
  console.log(curKey);
  return (
    <List
      className={
        isMain ? 'main-list' : curKey.includes(upperKey) ? '' : 'hidden'
      }
    >
      {Object.keys(json).map((key, index) => (
        <Item key={index} on={curKey.includes(key)}>
          <p
            className={`key ${curKey.includes(key) ? 'on' : 'off'}`}
            onClick={() => onSelectKey(key)}
          >
            <span className="icon-wrapper">
              <img className="icon-arrow" src={IconArrow} alt="" />
            </span>
            {key}
          </p>
          {typeof json[key] === 'object' ? (
            <Content json={json[key]} upperKey={key} />
          ) : (
            <ul>
              <Item className={curKey.includes(key) ? '' : 'hidden'}>
                <p className="value">{json[key]}</p>
              </Item>
            </ul>
          )}
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Item = styled.li<{ on?: boolean }>`
  display: block;
  padding: 5px 0 5px 15px;
  width: 100%;
  cursor: pointer;
  p {
    width: inherit;
    padding: 10px 5px;
    .icon-wrapper {
      display: inline-block;
      margin-right: 8px;
      transition: all 0.3s;
      img {
        color: ${SECONDARY_LIGHT_GRAY};
        vertical-align: middle;
      }
    }
    &.on {
      > .icon-wrapper {
        transform: rotate(90deg);
      }
    }
    &.off {
      > .icon-wrapper {
        transform: rotate(0deg);
      }
    }
  }
`;

export default React.memo(Content);
