import React from 'react';
import { useSelector, useDispatch } from '../../src'
import { decrement, increment } from '../features'
import "./index.less"

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleAddTap() {
    dispatch(increment())
  }
  function handleMinusTap() {
    dispatch(decrement())
  }
  return (
    <view className="counter__box">
      <text onTap={handleMinusTap} className="counter__button">点击-1</text>
      <text>计数器：{count}</text>
      <text onTap={handleAddTap} className="counter__button">点击+1</text>
    </view>
  )
}

export default Counter;
