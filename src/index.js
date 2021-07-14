import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loading from './Component/Loading/Loading';
import './index.css';
import reportWebVitals from './reportWebVitals';


const App = lazy(()=> import('./App'))



ReactDOM.render(
  <React.StrictMode>
  <Suspense fallback={ <Loading />  }>
    
    <App />

    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
