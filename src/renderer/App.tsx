import * as React from 'react';
import { injectGlobal } from 'styled-components';

// Components.
import { Main } from './components/Main';

injectGlobal`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    width: 100%;
  }
`;

export const App: React.SFC = () => (
    <Main />
);
