import { FC } from "react";

interface INoteResume {
	emote?: string;
	title: string;
	companyName: string;
	isActive: boolean;
	onClick: () => void;
}

const NoteResume: FC<INoteResume> = ({
	emote,
	title,
	companyName,
	isActive,
	onClick,
}) => {
	const setNoteColor = () => {
		if (isActive) {
			return "bg-slate-100";
		} else {
			return "bg-white";
		}
	};
	return (
		<div
			className={`w-full h-[80px] ${setNoteColor()} rounded-lg hover:bg-slate-100 transition-all duration-200 cursor-pointer flex flex-col box-border px-4 justify-center`}
			onClick={() => onClick()}
		>
			<h1 className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>
				{emote + " "}
				{title}
			</h1>
			<p className='overflow-hidden text-ellipsis whitespace-nowrap'>
				{companyName}
			</p>
		</div>
	);
};

export default NoteResume;
