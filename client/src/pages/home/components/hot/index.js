import React, { useState, useEffect, memo } from 'react';
import { history } from 'umi';

function Hot(props) {
  console.log('hot');
  const handleClick = id => {
    history.push({
      pathname: '/house',
      query: {
        id,
      },
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="hot">
      <h1>最热</h1>
      <div className="hot-lists">
        {props?.houses?.map(item => (
          <div
            className="hot-lists-item"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <img src={item?.imgs[0]?.url} alt="img" className="img" />
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(Hot);
