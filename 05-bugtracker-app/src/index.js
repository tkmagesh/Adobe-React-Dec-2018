import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';

import * as serviceWorker from './serviceWorker';

import BugTracker from './bugTracker'
import Spinner from './spinner';
import appStore from './store';

ReactDOM.render(<Provider store={appStore}>
				<div>
					<Spinner />
					<hr/>
					<BugTracker />
				</div>
			</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
