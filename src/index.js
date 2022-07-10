import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

export const PageContext = createContext({ page: 'home' })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
