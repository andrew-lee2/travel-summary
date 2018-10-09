import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BasicExample } from './components/Routing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BasicExample>
    <App />
  </BasicExample>,
  document.getElementById('root'));
registerServiceWorker();
