import { LeftContent } from '../../components/left-content/LeftContent'
import { ChessExperience } from '../../components/chess-experience/ChessExperience'

export const Experience = () => (
	<div className="flex h-full w-full">
		<LeftContent
			bgImage="bg-experience"
			quote={{
				text: '“Many have become chess masters; <br/> no one has become the master of chess.”',
				author: 'Siegbert Tarrasch',
			}}
			align="end"
			authorColor="text-[#093F68]"
		/>
		<ChessExperience />
	</div>
)
