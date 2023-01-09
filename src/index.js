import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import Loader from './components/loader/Loader';
import GoogleTranslate from './pages/GoogleTranslate';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loader/>}>
    {/* <React.StrictMode> */}
      <Provider store={store}>
      <GoogleTranslate/>
        <App />
      </Provider>
    {/* </React.StrictMode> */}
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
