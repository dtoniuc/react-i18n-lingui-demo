import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';
import App from './App';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));

root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
