import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';

const container = document.getElementById('root'),
      root = ReactDOM.createRoot(container); 


root.render(<React.StrictMode>
              <App />
            </React.StrictMode>);


