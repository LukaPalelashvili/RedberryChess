import parse from 'html-react-parser'
import { MainTitle } from '../main-title/MainTitle'

export const LeftContent = ({ bgImage, quote, authorColor = 'text-gray-400', align = 'start' }) => (
	<div className={`${bgImage} bg-cover h-screen w-1/2`}>
		<MainTitle />
		{quote && (
			<div className="flex flex-col pl-32 pt-40 gap-6">
				<blockquote className="text-3xl italic uppercase text-black font-bold leading-loose ">
					{parse(quote.text)}
				</blockquote>
				<span
					className={`text-2xl ${authorColor} italic self-${align} ${
						align === 'end' && 'pr-44'
					} uppercase`}
				>
					- {quote.author}
				</span>
			</div>
		)}
	</div>
)
