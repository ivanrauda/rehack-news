import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { fetchSaves } from './actions/saveActions';
import { fetchTopStories } from './actions/topStoriesActions';

import App from './components/App';

const store = configureStore();

store.dispatch(fetchSaves());
store.dispatch(fetchTopStories());

//Here we wrap <Router> component in a <Provider> component that Redux gives us access to, and pass in an instance of our store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
