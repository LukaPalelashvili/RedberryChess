import { ReactComponent as ArrowDown } from '../../assets/img/svg/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../assets/img/svg/arrow-up.svg'
import { useState } from 'react'

const options = ['beginner', 'intermediate', 'professional']

export const CustomSelect = () => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState('')
	console.log(dropdownIsOpen)

	return (
		<div className="w-1/2">
			<div
				className="flex items-center justify-between border-b border-gray-400 h-12 cursor-pointer"
				onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
			>
				<div className="flex items-center gap-1">
					<p className="text-black capitalize">{selectedOption || 'Level of knowledge'}</p>{' '}
					{!selectedOption && <span className="text-rose-700">*</span>}
				</div>
				{dropdownIsOpen ? <ArrowUp /> : <ArrowDown />}
			</div>
			<div
				className={`w-full bg-white absolute -ml-2 mt-1 w-[18%] z-10 border border-gray-400 shadow-xl ${
					dropdownIsOpen ? 'block' : 'hidden'
				}`}
			>
				<ul className="flex flex-col text-lg text-black">
					{options.map(option => (
						<li
							key={option}
							onClick={() => {
								setSelectedOption(option)
								setDropdownIsOpen(false)
							}}
							className="h-12 hover:bg-gray-600 hover:font-semibold flex items-center pl-5 cursor-pointer capitalize"
						>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
