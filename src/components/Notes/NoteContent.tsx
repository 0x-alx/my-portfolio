import { FC } from "react";

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
	return (
		<div className='border-box p-6'>
			<h1 className='font-bold text-2xl mb-6'>
				{emote + " "}
				{title}
			</h1>
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
