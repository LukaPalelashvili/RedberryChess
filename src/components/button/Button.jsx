import { ReactComponent as ArrowIcon } from '../../assets/img/svg/arrow.svg'

export const Button = ({ primary = true, children, withArrow, classList, secondary = false }) => (
	<button
		className={`rounded-lg flex items-center font-light gap-3 bg-black hover:border-4 hover:border-purple-200 border-4 text-2xl font-['Open_Sans'] text-white py-3 px-6 ${
			secondary && 'bg-white text-black border-2 hover:border-2 hover:bg-[#B9B4C34D]'
		} ${classList}`}
	>
		<span>{children}</span> {withArrow && <ArrowIcon />}
	</button>
)
