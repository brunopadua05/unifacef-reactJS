import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './plugins/sentry.plugin';
import './apis/axios.api';

import * as serviceWorker from './serviceWorker';
import * as store from './mobx';

import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import { router } from './mobx';
import { syncHistoryWithStore } from 'mobx-react-router';
import Loading from './components/loading/index';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Loading />
      <Router history={history}>
        <Routes />
      </Router>

    </Provider>
  </React.StrictMode>, rootElement

);

serviceWorker.register();
