import './App.css'
import { LeftContent } from './components/left-content/LeftContent'
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
