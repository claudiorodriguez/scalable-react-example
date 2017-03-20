// eslint-disable-next-line import/no-unassigned-import
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './core/components/App';

injectTapEventPlugin();

render(
  <App />,
  document.getElementById('root')
);
