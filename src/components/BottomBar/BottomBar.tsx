import BottomBarApp from "./BottomBarApp";

import {
	terminalIcon,
	mailIcon,
	noteIcon,
	launchpadIcon,
	linkedinIcon,
} from "../../assets/images";
import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	open as openTerminal,
	close as closeTerminal,
} from "../Terminal/terminalSlice";
import {
	open as openLaunchpad,
	close as closeLaunchpad,
} from "../Launchpad/launchpadSlice";
import { open as openNotes, close as closeNotes } from "../Notes/notesSlice";

const BottomBar: FC = () => {
	const terminalVisible = useAppSelector((state) => state.terminal.value);
	const launchpadVisible = useAppSelector((state) => state.launchpad.value);
	const notesVisible = useAppSelector((state) => state.notes.value);
	const dispatch = useAppDispatch();
	return (
		<div className='h-16 w-fit rounded-2xl bg-[rgba(83,83,83,0.25)] backdrop-blur-md flex justify-start items-center px-2'>
			<ul className='flex flex-row'>
				<BottomBarApp
					appName={"Terminal"}
					icon={terminalIcon}
					alt={"Terminal App Icon"}
					onClick={() => {
						if (terminalVisible) {
							dispatch(closeTerminal());
						} else {
							dispatch(openTerminal());
						}
					}}
				/>
				<BottomBarApp
					appName={"Career"}
					icon={noteIcon}
					alt={"Notes App Icon"}
					onClick={() => {
						if (notesVisible) {
							dispatch(closeNotes());
						} else {
							dispatch(openNotes());
						}
					}}
				/>
				<BottomBarApp
					appName={"Skills"}
					icon={launchpadIcon}
					alt={"Launchpad App Icon"}
					onClick={() => {
						if (launchpadVisible) {
							dispatch(closeLaunchpad());
						} else {
							dispatch(openLaunchpad());
						}
					}}
				/>
				<a href='mailto:alx.charbo@gmail.com?subject=Prise de contact'>
					<BottomBarApp
						appName={"Contact me"}
						icon={mailIcon}
						alt={"Mail App Icon"}
						onClick={() => {}}
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/alex-chrb/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<BottomBarApp
						appName={"Linkedin"}
						icon={linkedinIcon}
						alt={"Linkedin App Icon"}
						onClick={() => {}}
					/>
				</a>
			</ul>
		</div>
	);
};

export default BottomBar;
