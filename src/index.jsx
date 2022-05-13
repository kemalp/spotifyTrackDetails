import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter'
import './assets/style/index.scss'

import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<div className="appContainer">
				<AppRouter />
			</div>
		</Provider>
	</React.StrictMode>
)
