import './App.css'
import { Home } from './pages/home/Home'
import { PersonalInfo } from './pages/personal-info/PersonalInfo'
import { useState } from 'react'
import { PageContext } from './index'
import { Experience } from './pages/chess-experience/Experience'
import { Success } from './pages/success/Success'

function App() {
	const [currentPage, setCurrentPage] = useState()

	let currentComponent

	switch (currentPage) {
		case 'personal-info':
			currentComponent = <PersonalInfo />
			break
		case 'chess-experience':
			currentComponent = <Experience />
			break
		case 'success':
			currentComponent = <Success />
			break
		default:
			currentComponent = <Home />
	}

	return (
		<PageContext.Provider value={{ changePage: setCurrentPage }}>
			{currentComponent}
		</PageContext.Provider>
	)
}

export default App
