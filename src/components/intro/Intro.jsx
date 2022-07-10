import { Button } from '../button/Button'

export const Intro = () => (
	<div className="h-auto flex items-center w-1/2 bg-orange">
		<div>
			<h1 className="text-8xl text-white font-bold font-extrabold uppercase pl-20 leading-normal relative">
				Chess says <br />
				<span className="text-2xl absolute font-normal text-neutral-900 top-[19%] right-[-20%]">
					a lot about
				</span>
				who we are
			</h1>
			<div className="pl-20 mt-20">
				<Button withArrow classList="bg-orange">
					Get Started
				</Button>
			</div>
		</div>
	</div>
)