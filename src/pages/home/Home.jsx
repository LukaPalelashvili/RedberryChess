import { LeftContent } from '../../components/left-content/LeftContent'
import { Intro } from '../../components/intro/Intro'

export const Home = () => (
	<div className="flex h-full w-full">
		<LeftContent bgImage="bg-landing" />
		<Intro />
	</div>
)
