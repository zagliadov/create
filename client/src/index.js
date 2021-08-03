import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './store/store';
import { App } from './component/App/App';

ReactDOM.render(
  <React.StrictMode>
      <CssBaseline>
        <Provider store={store} >
          <App />
        </Provider>
      </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
