import BottomBarApp from "./BottomBarApp";

import {
	terminalIcon,
	mailIcon,
	noteIcon,
	launchpadIcon,
} from "../../assets/images";
import { FC } from "react";

const BottomBar: FC = () => {
	return (
		<div className='h-16 w-full max-w-sm rounded-2xl bg-[rgba(83,83,83,0.25)] backdrop-blur-md flex justify-start items-center px-2'>
			<ul className='flex flex-row'>
				<BottomBarApp
					appName={"Terminal"}
					icon={terminalIcon}
					alt={"Terminal App Icon"}
					onClick={() => {}}
				/>
				<a href='mailto:alx.charbo@gmail.com?subject=Prise de contact'>
					<BottomBarApp
						appName={"Mail"}
						icon={mailIcon}
						alt={"Mail App Icon"}
						onClick={() => {}}
					/>
				</a>
				<BottomBarApp
					appName={"Notes"}
					icon={noteIcon}
					alt={"Notes App Icon"}
					onClick={() => {}}
				/>
				<BottomBarApp
					appName={"Launchpad"}
					icon={launchpadIcon}
					alt={"Launchpad App Icon"}
					onClick={() => {}}
				/>
			</ul>
		</div>
	);
};

export default BottomBar;
