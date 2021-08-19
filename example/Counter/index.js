import React from 'react';
import { useSelector, useDispatch } from '../../src'
import { decrement, increment } from '../features'

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
    <view style={counterBox}>
      <text onTap={handleMinusTap} style={counterButton}>点击-1</text>
      <text style={textStyle}>计数器：{count}</text>
      <text onTap={handleAddTap} style={counterButton}>点击+1</text>
    </view>
  )
}
const counterBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const textStyle ={
  fontSize: '40px',
  fontWeight: 'bold',
  marginLeft: '20px',
  marginRight: '20px',
};
const counterButton = {
  padding: '30px',
  textAlign: 'center',
  color: '#ffffff',
  fontSize: '40px',
  borderRadius: '10px',
  backgroundColor: '#ff5500'
};
export default Counter;
