import { ReactComponent as ArrowDown } from '../../assets/img/svg/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../assets/img/svg/arrow-up.svg'
import { useState } from 'react'
import { ReactComponent as SuccessIcon } from '../../assets/img/svg/checkmark.svg'

export const CustomSelectV2 = ({ data, setValue, error, selectedValue }) => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(selectedValue || '')

	const handleOptionClick = (id, option) => {
		setSelectedOption(option)
		setValue('character_id', id)
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
						{selectedOption || selectedValue || 'Choose your character'}
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
				} scroll-auto`}
			>
				<div className="pl-7 pt-4 pb-2 text-[#817D7D] font-semibold">(Total {data.length})</div>
				<ul className="flex flex-col text-lg text-black gap-2 max-h-96 overflow-scroll">
					{data.map(item => (
						<li
							key={item.name}
							onClick={() => {
								handleOptionClick(item.id, item.name)
								handleInputChange(item.id, 'character_id')
							}}
							className={`flex items-center justify-between pl-7 h-20 hover:bg-gray-600 hover:font-semibold capitalize cursor-pointer ${
								selectedOption === item.name && 'bg-gray-600 font-semibold'
							}`}
						>
							<p className="text-lg text-[#212529]">{item.name}</p>
							<img className="max-h-12 object-cover" src={item.image} alt={item.name} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
