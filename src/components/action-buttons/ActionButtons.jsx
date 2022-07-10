import { Button } from '../button/Button'

export const ActionButtons = ({ onBack, onNext }) => {
	return (
		<div className="flex justify-between w-3/4 mt-24">
			<Button onClick={onBack} secondary>
				Back
			</Button>
			<Button onClick={onNext} withArrow>
				Next
			</Button>
		</div>
	)
}
