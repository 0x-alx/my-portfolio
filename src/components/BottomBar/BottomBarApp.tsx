import { FC } from "react";
import Tooltip from "../Tooltip/Tooltip";

interface IBottomBarApp {
	appName: string;
	icon: string;
	alt: string;
	onClick: () => void;
}

const BottomBarApp: FC<IBottomBarApp> = ({ appName, icon, alt, onClick }) => {
	return (
		<li
			className='cursor-pointer transition duration-200 hover:scale-125 hover:translate-y-[-10px]'
			id={appName}
			onClick={onClick}
		>
			<Tooltip />
			<img
				data-tooltip-target='tooltip-default'
				src={icon}
				alt={alt}
				className='h-[50px] w-[50px]'
			/>
		</li>
	);
};

export default BottomBarApp;
