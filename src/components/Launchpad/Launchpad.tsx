import LaunchpadApp from "./LaunchpadApp";
import { skillsJson } from "../../utils/skills.js";
import { useAppDispatch } from "../../app/hooks.js";
import { close as closeLaunchpad } from "../Launchpad/launchpadSlice";

const Launchpad = () => {
	const dispatch = useAppDispatch();
	return (
		<div
			className='w-full h-full m-h-screen absolute z-2 bg-[rgba(31,41,55,0.25)] backdrop-blur-md md:px-[200px] py-[80px] overflow-scroll'
			onClick={() => {
				dispatch(closeLaunchpad());
			}}
		>
			<h1 className='flex justify-center text-white font-bold text-2xl mb-6'>
				Technical skills
			</h1>
			<ul className='flex flex-row gap-x-[80px] gap-y-[40px] flex-wrap justify-center'>
				{skillsJson.map((skill) => {
					return (
						<LaunchpadApp
							appName={skill.name}
							icon={skill.icon}
							alt={"test"}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Launchpad;
