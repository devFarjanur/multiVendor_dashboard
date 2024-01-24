import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// Correct the typo here
const App = lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback='loading...'>
        <App />
        <Toaster 
          toastOptions = {{
            position: 'top-right',
            style: {
              background: '#283046',
              color: 'white'
            }
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
