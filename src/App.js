import './App.css'
import { Home } from './pages/home/Home'
import { PersonalInfo } from './pages/personal-info/PersonalInfo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Experience } from './pages/chess-experience/Experience'
import { Success } from './pages/success/Success'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="personal-info" element={<PersonalInfo />} />
				<Route path="chess-experience" element={<Experience />} />
				<Route path="success" element={<Success />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
