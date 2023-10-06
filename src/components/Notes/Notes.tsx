import NoteResume from "./NoteResume";
import NoteContent from "./NoteContent";
import { vpLogo, armeeLogo } from "../../assets/images";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { close, setActiveNote } from "./notesSlice";

const Notes = () => {
	const activeNote = useAppSelector((state) => state.notes.activeNote);
	const dispatch = useAppDispatch();

	const data = [
		{
			emote: "🏝",
			title: "2022 - ...",
			logo: vpLogo,
			job: "Développeur Front-End",
			companyName: "Voyage Privé",
			tasks: [
				"Création d'un d'un design-system (Storybook, React)",
				"Création et maintenance de packages NPM",
				"Conception d'emails responsive",
				"Conception de prototypes (React, SCSS, Typescript)",
			],
		},
		{
			emote: "🪖",
			title: "2015 - 2021",
			logo: armeeLogo,
			job: "Technicien Informatique",
			companyName: "Armée de l'Air",
			tasks: [
				"Mise en place et maintenance des équipements de chiffrements",
				"Configuration et maintenance d'appareils permettant la mobilité de l'intranet (Smartphone, tablette, PC)",
				"Gestion des stocks",
				"Gestion d'équipe pour le projet de migration massive de Windows 7 vers Windows 10",
				"Astreinte informatique opérationnelle pour les personnels VIP/VOP/THA du ministère",
				"Développement de scripts d'automatisations de tâches",
			],
		},
		{
			title: "À propos de moi",
			companyName: "[À compléter]",
		},
	];

	return (
		<div className='w-[98%] h-[600px] max-h-[80vh] max-w-[876px] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-lg flex flex-col overflow-hidden'>
			<div className='w-full min-h-[30px] flex bg-slate-100 px-2 items-center rounded-t-lg '>
				<div
					className='h-3 w-3 bg-red-500 rounded-full cursor-pointer'
					onClick={() => dispatch(close())}
				></div>
				<div className='ml-2 h-3 w-3 bg-slate-500 rounded-full'></div>
				<div className='ml-2 h-3 w-3 bg-slate-500 rounded-full'></div>
			</div>
			<div className='flex w-full h-[570px] flex-row'>
				{/* --- LEFT PART ---*/}
				<div className='w-[30%] h-full bg-white rounded-l-lg border-r-[1px] border-slate-200 p-3 box-border flex-col gap-1 hidden md:flex'>
					{data.map((note, index: number) => {
						return (
							<NoteResume
								emote={note.emote ? note.emote : ""}
								title={note.title}
								companyName={note.companyName}
								isActive={activeNote === index && true}
								onClick={() => dispatch(setActiveNote(index))}
							/>
						);
					})}
				</div>
				{/* --- RIGHT PART ---*/}
				<div className='w-full md:w-[70%] h-full bg-white rounded-r-lg overflow-scroll m-h-full'>
					<NoteContent
						emote={
							data[activeNote].emote ? data[activeNote].emote : ""
						}
						title={data[activeNote].title}
						companyName={data[activeNote].companyName}
						tasks={data[activeNote].tasks}
						job={data[activeNote].job}
						logo={data[activeNote].logo}
					/>
				</div>
			</div>
		</div>
	);
};

export default Notes;
