import './App.css'
import { LeftContent } from './components/left-content/LeftContent'
import { UserInfo } from './components/user-info/UserInfo'
import { ChessExperience } from './components/chess-experience/ChessExperience'

function App() {
	return (
		<div className="flex h-full w-full">
			<LeftContent />
			<ChessExperience />
		</div>
	)
}

export default App
