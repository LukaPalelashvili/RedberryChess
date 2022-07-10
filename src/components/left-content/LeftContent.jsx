import { MainTitle } from '../main-title/MainTitle'

export const LeftContent = () => (
	<div className="bg-secondary bg-cover h-screen w-1/2">
		<MainTitle />
		<div className="flex flex-col pl-32 pt-40 gap-6">
			<blockquote className="text-3xl italic uppercase text-black font-bold leading-loose">
				“When you see a good move, <br /> look for a better one.”
			</blockquote>
			<span className="text-2xl text-gray-400 italic uppercase">-Emanuel Lasker</span>
		</div>
	</div>
)
