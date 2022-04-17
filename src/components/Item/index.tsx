import React, { ReactNode } from 'react';
import { useJson } from 'hooks';
import classNames from 'classnames';
import styled from 'styled-components';

interface TItleItemProps {
  hidden?: boolean;
  className: 'key' | 'value';
  keyName: string;
  value?: any;
  children?: ReactNode;
}
const AccordianItem = (props: TItleItemProps) => {
  const { hidden = false, className, keyName, value, children } = props;
  const isKey = className === 'key';
  const { curKey, onSelectKey } = useJson();
  return (
    <Item className={classNames(hidden && 'hidden')}>
      <p
        className={classNames(className, curKey.includes(keyName) && 'on')}
        onClick={() => isKey && onSelectKey(keyName)}
      >
        {isKey && <span className="icon-acc" />}
        {isKey ? keyName : value}
      </p>
      {children && children}
    </Item>
  );
};

const Item = styled.li`
  display: block;
  padding: 5px 0 5px 15px;
  width: 100%;
  cursor: pointer;
  p {
    width: inherit;
    padding: 10px 5px;
    .icon-acc {
      float: right;
      width: 20px;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .icon-acc:before,
    .icon-acc:after {
      content: '';
      position: absolute;
      background-color: #c9d6df;
      transition: all 0.3s ease;
    }
    .icon-acc:before {
      width: 2px;
      height: 20px;
    }
    .icon-acc:after {
      width: 20px;
      height: 2px;
    }
    &:hover .icon-acc:before,
    &:hover .icon-acc:after {
      background-color: #52616b;
    }
    &.on {
      > .icon-acc:before {
        transform: rotate(90deg);
      }
    }
  }
`;

export default React.memo(AccordianItem);
