import { ReactComponent as Error } from '../../assets/img/svg/error.svg'

export const ToastrError = ({ title, description }) => (
	<div>
		<div className="flex items-center border-b border-gray-400 gap-1 pb-1">
			<Error className="w-4 h-4" />
			<span className="text-sm text-[#DC3545]">Invalid {title}</span>
		</div>
		<span className="text-base text-black font-sans mt-3 inline-block font-light">
			{description}
		</span>
	</div>
)
