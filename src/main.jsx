import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { MyDataProvider } from '@components/ScrollData';
import myIcon from '@images/img_topbar/icon.webp';
import './i18n';

const App = React.lazy(() => import('./App'));

function Index() {
  return (
    <React.StrictMode>
      <HashRouter>
        <MyDataProvider>
          <App />
        </MyDataProvider>
      </HashRouter>
    </React.StrictMode>
  );
}

// Reindirizzamento automatico alla home
if (!window.location.hash) {
  window.location.hash = '#/home';
}

// Setto la mia icona
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/webp';
link.href = myIcon;
document.head.appendChild(link);

// Creazione della root React
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);