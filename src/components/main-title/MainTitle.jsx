import { ReactComponent as CrownIcon } from '../../assets/img/svg/crown.svg'

export const MainTitle = () => (
	<div className="flex pl-16 gap-1 items-center h-20 bg-purple-500 text-lg text-red text-white font-bold">
		<CrownIcon className="inline-block align-middle" />
		<span className="text-2xl">Redberry Knight Cup</span>
	</div>
)
