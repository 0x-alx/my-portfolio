import { FC } from "react";

interface ILaunchpadApp {
	appName: string;
	icon: string;
	alt: string;
}

const LaunchpadApp: FC<ILaunchpadApp> = ({ appName, icon, alt }) => {
	return (
		<li
			className='cursor-pointer w-[130px] flex flex-col justify-center items-center text-white'
			id={appName}
		>
			<img
				src={icon}
				alt={alt}
				className='h-[130px] w-[130px]'
			/>
			{appName}
		</li>
	);
};

export default LaunchpadApp;
