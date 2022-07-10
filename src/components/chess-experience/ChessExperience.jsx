import { Button } from '../button/Button'
import { CustomSelect } from '../custom-select/CustomSelect'
import { CustomSelectV2 } from '../custom-select-v2/CustomSelectV2'
import { useContext } from 'react'
import { PageContext } from '../../index'

export const ChessExperience = () => {
	const { changePage } = useContext(PageContext)

	return (
		<div className="flex flex-col w-1/2">
			<div className="flex gap-1 items-center border-b border-gray-800 h-20">
				<span className="font-sans text-base pl-12">
					First step is done, continue to finish onboarding
				</span>
			</div>
			<div className="pl-12">
				<div className="flex mt-16 gap-12">
					<div className="flex flex-col items-center relative gap-2">
						<div className="w-10 h-10 flex justify-center items-center rounded-lg bg-green-100 text-black font-bold relative">
							1
							<span className="w-32 h-0.5 bg-gray-200 absolute top-1/2 left-[120%]" />
						</div>
						<span className="font-sans text-base">Personal Information</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<div className="w-10 h-10 flex justify-center items-center border rounded-lg border-gray-400 bg-gray-100 text-black">
							2
						</div>
						<span className="font-sans text-base">Chess Experience</span>
					</div>
				</div>
				<div className="flex flex-col gap-5 mt-32">
					<h1 className="text-4xl">Chess experience</h1>
					<p className="text-sm text-gray-500 capitalize">These are basic information fields</p>
					<form className="flex flex-col gap-5 w-3/4 mt-16" action="">
						<div className="flex justify-between gap-8">
							<CustomSelect />
							<CustomSelectV2 />
						</div>
						<div className="mt-20">
							<span className="text-black text-lg">
								Have your participated in the Redberry Championship?
							</span>
							<div className="mt-5 flex gap-4">
								<div className="flex gap-1">
									<input type="radio" id="yes" name="participated" value="Yes" />
									<label className="text-black" htmlFor="yes">
										Yes
									</label>
									<span className="checkmark"></span>
								</div>
								<div className="flex gap-1">
									<input className="" type="radio" id="no" name="participated" value="No" />
									<label className="text-black" htmlFor="no">
										No
									</label>
								</div>
							</div>
						</div>
					</form>
					<div className="flex justify-between w-3/4 mt-24">
						<Button onClick={() => changePage('personal-info')} secondary>
							Back
						</Button>
						<Button onClick={() => changePage('success')}>Done</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
