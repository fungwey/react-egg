import React, { useEffect } from 'react';
import { WingBlank, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'umi';

export default function(props) {
  useEffect(() => {}, []);

  return (
    <div>
      <WingBlank>
        <WhiteSpace />
        <List>
          <List.Item>
            <Link to="function/hook">hook</Link>
          </List.Item>
          <List.Item>
            <Link to="function/context">context</Link>
          </List.Item>
          <List.Item>
            <Link to="function/customize">customize</Link>
          </List.Item>
        </List>
        <WhiteSpace />
      </WingBlank>
    </div>
  );
}
