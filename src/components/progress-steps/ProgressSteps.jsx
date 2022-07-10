export const ProgressSteps = ({ step }) => {
	return (
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
	)
}
