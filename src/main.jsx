import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ScrollProvider } from '@components/ScrollData';
import LoadingSpinner from '@components/LoadingSpinner';

import myIcon from '@images/img_topbar/icon.webp';
import '@styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './i18n';

const App = React.lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

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