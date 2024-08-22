import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import store from './store/store.tsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
);