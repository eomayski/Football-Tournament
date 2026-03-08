import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Provider store={store}>
       <PersistGate loading={<div className="loader"></div>} persistor={persistor}>
        <App />
       </PersistGate>
    </Provider>
    </HashRouter>
  </StrictMode>,
)
