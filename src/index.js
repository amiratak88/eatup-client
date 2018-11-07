import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import { ActionCableProvider } from 'react-actioncable-provider'
import { API_WS_ROOT } from './constants'
import store, {history} from './configureStore'
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
	<Provider store={store}>
		<ActionCableProvider url={API_WS_ROOT}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</ActionCableProvider>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()