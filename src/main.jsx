import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <PersistGate loading={<div>Зареждане на съхранени данни...</div>} persistor={persistor}>
        <App />
       </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
