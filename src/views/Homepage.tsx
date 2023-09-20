import BottomBar from "../components/BottomBar/BottomBar";
import Launchpad from "../components/Launchpad/Launchpad";
import Spotify from "../components/Spotify/Spotify";
import Terminal from "../components/Terminal/Terminal";
import TopBar from "../components/TopBar/TopBar";

const Homepage = () => {
	return (
		<div className='h-screen bg-mainBackground bg-cover relative'>
			<TopBar />
			<Spotify />
			<Launchpad />
			{/* <Terminal /> */}
			<div className='flex justify-center items-center fixed bottom-5 w-full'>
				<BottomBar />
			</div>
		</div>
	);
};

export default Homepage;
