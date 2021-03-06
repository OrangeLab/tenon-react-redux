import React from 'react';
import { Provider } from '../src';
import store from './store'
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
