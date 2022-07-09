import './App.css'
import { ReactComponent as CrownIcon } from './assets/img/svg/crown.svg'
import { ReactComponent as ArrowIcon } from './assets/img/svg/arrow.svg'

function App() {
	return (
		<div className="flex h-full w-full">
			<div className="bg-landing bg-cover h-screen w-1/2">
				<div className="flex pl-16 gap-1 items-center h-20 bg-purple text-lg text-red text-white font-bold">
					<CrownIcon className="inline-block align-middle" />
					<span className="text-2xl">Redberry Knight Cup</span>
				</div>
			</div>
			<div className="h-auto flex items-center w-1/2 bg-orange">
				<div>
					<h1 className="text-8xl text-white font-bold font-extrabold uppercase pl-20 leading-normal relative">
						Chess says <br />
						<span className="text-2xl absolute font-normal text-neutral-900 top-[19%] right-[-15%]">
							a lot about
						</span>
						who we are
					</h1>
					<div className="pl-20 mt-20">
						<button className="rounded-md flex items-center font-light gap-3 bg-black hover:bg-neutral-600 text-2xl font-['Open_Sans'] text-white py-3 px-6">
							<span>Get Started</span> <ArrowIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
