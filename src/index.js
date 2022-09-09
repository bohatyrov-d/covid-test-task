import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ProtectedRoute, } from "./infrastructure/router/router.component";
import { Provider, } from "react-redux";
import { appStore, } from "./infrastructure/store/app.store";
import { LayoutComponent, } from "./ui-kit/components/layout/layout.component";
import { CovidStatisticsPage, } from "./covid-statistics/covid-statistics.page";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={appStore}>
        <LayoutComponent>
          <Router>
            <Routes>
              <Route element={<ProtectedRoute />} exact path="/">
                <Route element={<CovidStatisticsPage />} exact path="/" />
              </Route>
            </Routes>
          </Router>
        </LayoutComponent>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
