import BottomBar from "../components/BottomBar/BottomBar";
import Launchpad from "../components/Launchpad/Launchpad";
import Spotify from "../components/Spotify/Spotify";
import Terminal from "../components/Terminal/Terminal";
import TopBar from "../components/TopBar/TopBar";
import Notes from "../components/Notes/Notes";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";

const Homepage = () => {
	const terminalVisible = useAppSelector((state) => state.terminal.value);
	const launchpadVisible = useAppSelector((state) => state.launchpad.value);
	const notesVisible = useAppSelector((state) => state.notes.value);

	useEffect(() => {
		if (sessionStorage.getItem("logged_in") !== "true") {
			window.location.href = "/";
		}
	});

	return (
		<div className='h-screen bg-mainBackground bg-cover relative'>
			<TopBar />
			<Spotify />
			{launchpadVisible && <Launchpad />}
			{terminalVisible && <Terminal />}
			{notesVisible && <Notes />}
			<div className='flex justify-center items-center fixed bottom-5 w-full'>
				<BottomBar />
			</div>
		</div>
	);
};

export default Homepage;
