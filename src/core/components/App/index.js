import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const App = () => {
  return (
    <div styleName='container'>
      <h2>Hello World</h2>
    </div>
  );
};

export default CSSModules(App, styles);
