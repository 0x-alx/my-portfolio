import { FC } from "react";
import { chevron } from "../../assets/images";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveNote } from "./notesSlice";

interface INoteContent {
	emote?: string;
	title: string;
	companyName: string;
	tasks?: string[];
	job?: string;
	logo?: string;
}

const NoteContent: FC<INoteContent> = ({
	emote,
	title,
	companyName,
	tasks,
	job,
	logo,
}) => {
	const dispatch = useAppDispatch();
	const activeNote = useAppSelector((state) => state.notes.activeNote);

	const nextNote = () => {
		if (activeNote === 2) return dispatch(setActiveNote(0));
		dispatch(setActiveNote(activeNote + 1));
	};

	const previousNote = () => {
		if (activeNote === 0) return dispatch(setActiveNote(2));
		dispatch(setActiveNote(activeNote - 1));
	};
	return (
		<div className='border-box p-6'>
			<div className='flex flex-row justify-between items-center  mb-6'>
				<h1 className='font-bold text-2xl'>
					{emote + " "}
					{title}
				</h1>
				<div className='flex gap-4'>
					<img
						src={chevron}
						alt=''
						className='w-[16px] h-[16px] rotate-180 cursor-pointer md:hidden'
						onClick={() => {
							previousNote();
						}}
					/>
					<img
						src={chevron}
						alt=''
						className='w-[16px] h-[16px] cursor-pointer md:hidden'
						onClick={() => {
							nextNote();
						}}
					/>
				</div>
			</div>

			<div className='flex items-center'>
				{logo && (
					<img
						src={logo}
						alt=''
						className='w-[32px] h-[32px] mr-2'
					/>
				)}
				<p className='font-bold'>{companyName}</p>
			</div>
			<p className='italic'>{job}</p>
			{tasks && (
				<div className='mt-6 px-6'>
					<ul className='list-disc'>
						{tasks.map((task) => {
							return <li>{task}</li>;
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default NoteContent;
