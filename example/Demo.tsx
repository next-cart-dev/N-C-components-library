import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../dist';
import {Button} from '../src/Button'

const App = () => {
  return (
    <div>
      <Thing />
      <Button text='exemplo'/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
