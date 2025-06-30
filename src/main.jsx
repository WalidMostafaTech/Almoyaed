import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import { LoadingProvider } from './context/LoadingContext.jsx';
import { SelectedServiceProvider } from './context/SelectedServiceContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
      <SelectedServiceProvider>
        <App />
      </SelectedServiceProvider>
    </LoadingProvider>
  </StrictMode>,
)
