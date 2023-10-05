import { FC } from "react";

interface ILaunchpadApp {
	appName: string;
	icon: string;
	alt: string;
}

const LaunchpadApp: FC<ILaunchpadApp> = ({ appName, icon, alt }) => {
	return (
		<li
			className='w-[130px] flex flex-col justify-center items-center text-white'
			id={appName}
		>
			<img
				src={icon}
				alt={alt}
				className='h-[115px] w-[115px]'
			/>
			{appName}
		</li>
	);
};

export default LaunchpadApp;
