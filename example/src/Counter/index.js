import { useSelector, useDispatch } from 'tenon-react-redux'
import { decrement, increment } from '../features'

function Counter() {
  return (
    <view className="counter__box">
      <button className="counter__button">点击-1</button>
      <text>计数器：{}</text>
      <button className="counter__button">点击+1</button>
    </view>
  )
}
export default Counter;
