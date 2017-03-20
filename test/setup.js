// eslint-disable-next-line import/no-unassigned-import
import 'babel-polyfill';
import path from 'path';
import hook from 'css-modules-require-hook';
import sass from 'node-sass';
import {jsdom} from 'jsdom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

hook({
  extensions: ['.css', '.scss'],
  generateScopedName: '[local]',
  preprocessCss: (data, filename) => {
    return sass.renderSync({
      data,
      file: filename,
      importer: (url) => {
        if (url.indexOf('~') === 0) {
          const nodeModulesPath = path.resolve(__dirname, '..', 'node_modules');

          return {
            file: path.join(nodeModulesPath, url.replace('~', ''))
          };
        }

        return {file: url};
      }
    }).css;
  }
});

// jsdom
const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js'
};
