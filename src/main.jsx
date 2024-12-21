import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import myIcon from '@images/img_topbar/icon.webp';
import '@styles/index.css';
import './i18n';

const App = React.lazy(() => import('./App'));

function setFavicon() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/webp';
  link.href = myIcon;
  document.head.appendChild(link);
}

function redirectToHome() {
  if (!window.location.hash) {
    window.location.hash = '#/home';
  }
}

setFavicon();
redirectToHome();

const Index = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <App />
        </Suspense>
      </HashRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);