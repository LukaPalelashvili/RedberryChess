import { ReactComponent as ArrowDown } from '../../assets/img/svg/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../assets/img/svg/arrow-up.svg'
import { ReactComponent as SuccessIcon } from '../../assets/img/svg/checkmark.svg'
import { useState } from 'react'

const options = ['beginner', 'normal', 'professional']

export const CustomSelect = ({ setValue, error, selectedValue }) => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(selectedValue || '')

	const handleOptionClick = option => {
		setSelectedOption(option)
		setValue('experience_level', option)
		setDropdownIsOpen(false)
	}

	const handleInputChange = (value, field) => {
		const form = localStorage.getItem('signupForm')
		localStorage.setItem('signupForm', JSON.stringify({ ...JSON.parse(form), [field]: value }))
	}

	return (
		<div className="w-1/2">
			<div
				className={`flex items-center justify-between border-b border-gray-400 h-12 cursor-pointer ${
					error && 'bg-red-100 text-red-700 hover:bg-red-100 focus:bg-red-100'
				}`}
				onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
			>
				<div className="flex items-center gap-1">
					<p className={`text-black ml-2 capitalize ${error && 'text-red-700'}`}>
						{selectedOption || selectedValue || 'Level of knowledge'}
					</p>{' '}
					{!selectedOption && <span className="text-rose-700">*</span>}
				</div>
				{!selectedOption && !selectedValue ? (
					dropdownIsOpen ? (
						<ArrowUp className="mr-2" />
					) : (
						<ArrowDown className="mr-2" />
					)
				) : null}
				{(selectedValue || selectedOption) && <SuccessIcon className="mr-2" />}
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
								handleOptionClick(option)
								handleInputChange(option, 'experience_level')
							}}
							className={`h-12 hover:bg-gray-600 hover:font-semibold flex items-center pl-5 cursor-pointer capitalize ${
								selectedOption === option ||
								(selectedValue === option && 'bg-gray-600 font-semibold')
							}`}
						>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
