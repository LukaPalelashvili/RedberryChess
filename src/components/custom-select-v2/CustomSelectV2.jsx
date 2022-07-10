import { ReactComponent as ArrowDown } from '../../assets/img/svg/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../assets/img/svg/arrow-up.svg'
import Magnus from '../../assets/img/people/magnus.png'
import { useState } from 'react'

const options = [
	{
		name: 'Magnus Carlsen',
		image: Magnus,
	},
	{
		name: 'Magnus Carlsen',
		image: Magnus,
	},
	{
		name: 'Magnus Carlsen',
		image: Magnus,
	},
	{
		name: 'Magnus Carlsen',
		image: Magnus,
	},
	{
		name: 'Magnus Carlsen',
		image: Magnus,
	},
]

export const CustomSelectV2 = () => {
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState('')

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
				} scroll-auto`}
			>
				<div className="pl-7 pt-4 pb-2 text-[#817D7D] font-semibold">(Total {options.length})</div>
				<ul className="flex flex-col text-lg text-black gap-2 max-h-96 overflow-scroll">
					{options.map(item => (
						<li
							key={item.name}
							onClick={() => {
								setSelectedOption(item.name)
								setDropdownIsOpen(false)
							}}
							className={`flex items-center justify-between pl-7 h-20 hover:bg-gray-600 hover:font-semibold capitalize cursor-pointer ${
								selectedOption === item.name && 'bg-gray-600 font-semibold'
							}`}
						>
							<p className="text-lg text-[#212529]">{item.name}</p>
							<img className="max-w-[100px]" src={item.image} alt="" />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
