import { LeftContent } from '../../components/left-content/LeftContent'
import { UserInfo } from '../../components/user-info/UserInfo'

export const PersonalInfo = () => (
	<div className="flex h-full w-full">
		<LeftContent
			bgImage="bg-secondary"
			quote={{
				text: '“When you see a good move, <br /> look for a better one.”',
				author: 'Emanuel Lasker',
			}}
		/>
		<UserInfo />
	</div>
)
