import { FC } from "react";
import { Tooltip } from "react-daisyui";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { closed, open } from "./terminalSlice";

interface IBottomBarApp {
	appName: string;
	icon: string;
	alt: string;
	onClick: () => void;
}

const BottomBarApp: FC<IBottomBarApp> = ({ appName, icon, alt, onClick }) => {
	return (
		<li
			className='cursor-pointer transition duration-200 hover:scale-125 hover:translate-y-[-10px] flex'
			id={appName}
			onClick={onClick}
		>
			<Tooltip
				message={appName}
				className=''
			>
				<img
					src={icon}
					alt={alt}
					className='h-[50px] w-[50px]'
				/>
			</Tooltip>
		</li>
	);
};

export default BottomBarApp;
