import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './components/app/store.js';
import { Provider } from 'react-redux';
import './styles/index.css';
import './styles/tailwind.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
