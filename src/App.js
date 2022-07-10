import './App.css'
import { LeftContent } from './components/left-content/LeftContent'
import { Intro } from './components/intro/Intro'
import { UserInfo } from './components/user-info/UserInfo'

function App() {
	return (
		<div className="flex h-full w-full">
			<LeftContent />
			<UserInfo />
		</div>
	)
}

export default App
