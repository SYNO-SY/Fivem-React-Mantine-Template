import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import App from './App';
import LocaleProvider from './providers/LocaleProvider';
import { VisibilityProvider } from './providers/VisibilityProvider';
import { theme } from './theme/theme';
import { debugData } from './utils/debugData';
import { isEnvBrowser } from './utils/misc';

debugData([
  {
    action: 'setVisible',
    data: 'show-ui',
  },
]);

if (isEnvBrowser()) {
  const root = document.getElementById('root');
  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VisibilityProvider>
      <LocaleProvider>
        <MantineProvider theme={{ ...theme }}>
          <App></App>
        </MantineProvider>
      </LocaleProvider>
    </VisibilityProvider>
  </React.StrictMode>
);
