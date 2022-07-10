import { Button } from '../button/Button'
import InputMask from 'react-input-mask'

export const UserInfo = () => (
	<div className="flex flex-col w-1/2">
		<div className="flex gap-1 items-center border-b border-gray-800 h-20">
			<span className="font-sans text-base pl-12">Start Creating Your Account</span>
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
				<h1 className="text-4xl">Personal Information</h1>
				<p className="text-sm text-gray-500 capitalize">These are basic information fields</p>
				<form className="flex flex-col gap-5 w-3/4 mt-16" action="">
					<input
						type="text"
						placeholder="Name"
						className="h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500"
					/>
					<input
						type="email"
						placeholder="Email address"
						className="h-12 pl-4 border-b border-dotted text-red-700 text-xl bg-red-100 placeholder:text-red-700 hover:bg-red-100 focus:outline-0 focus:bg-red-100 focus:ring-0 border-gray-500"
					/>
					<InputMask
						mask="599 99 99 99"
						placeholder="Phone number"
						className="h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500"
						maskPlaceholder="dd/mm/yy"
					/>
					<InputMask
						mask="99/99/9999"
						placeholder="Date of birth"
						className="h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500"
						maskPlaceholder="dd/mm/yy"
					/>
				</form>
				<div className="flex justify-between w-3/4 mt-24">
					<Button secondary>Back</Button>
					<Button withArrow>Next</Button>
				</div>
			</div>
		</div>
	</div>
)
