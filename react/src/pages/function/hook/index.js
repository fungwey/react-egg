import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';

export default function(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('test-dmoe');

  /**
   * useEffect 去掉 , []  监控所有变化
   *
   * 监控[]内变化
   *
   * 可调用异步
   *
   * async await 方法
   */
  useEffect(() => {
    console.log('useEffect');
    demo();
  }, [count]);
  useEffect(() => {
    console.log('useEffect 2');
  }, [count]);

  /**
   * 渲染完执行此方法
   * 可进行dom操作
   */
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, [count]);

  async function demo() {
    await console.log('demo');
  }
  // const handleCount = () => {
  //   console.log('handleCount');
  //   setCount(count + 1);
  // };
  const handleCount = useCallback(() => {
    console.log('handleCount');
    setCount(count + 1);
  }, [count]);

  const noCatchText = () => {
    console.log('text changed');
    return text;
  };

  const momeText = useMemo(() => {
    console.log('text changed useMemo');
    return text;
  }, [text]);

  return (
    <div>
      <h1 onClick={handleCount}>count:{count}</h1>
      <h1>text:{noCatchText()}</h1>
      <h1>momeText:{momeText}</h1>
    </div>
  );
}
