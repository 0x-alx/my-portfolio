import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

interface ITerminalText {
	text: string;
	type: "error" | "success" | "info";
}

const TerminalText: FC<ITerminalText> = ({ text, type }) => {
	const textStyle = () => {
		if (type === "error") {
			return "text-red-500";
		} else if (type === "info") {
			return "font-light";
		}
	};

	return (
		<div className='mt-4 flex'>
			{type === "success" && (
				<span className='text-green-400 pl-2'>computer:~$</span>
			)}
			<TypeAnimation
				sequence={[text]}
				cursor={false}
				speed={80}
				className={`flex-1 typing items-center ${textStyle()}`}
			/>
		</div>
	);
};

export default TerminalText;
